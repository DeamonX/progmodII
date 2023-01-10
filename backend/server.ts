import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import routes from './routes/routes';

const NAMESPACE = 'Server';
const router = express();

/*Log*/

router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('Finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

/** Parse req*/

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**Methods */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    if (req.method == 'OPTIONS') {
        res.header('Access-Controll-Allow-Method', 'GET DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

/**Routes */
router.use('/bookstore', routes);
/** Hiba kezelés */
router.use((req, res, next) => {
    const error = new Error('nem található');

    return res.status(404).json({ message: error.message });
});

/**Create the server */

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Fut a szerver itt: ${config.server.hostname}:${config.server.port}`));
