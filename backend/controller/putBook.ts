import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import { Connect, Querry } from '../config/mysql';

const NAMESPACE = 'Controller of Put Book';

interface Book {
    name: string;
}

const book = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `is called.`);

    let b = req.body as Book;

    let query = `UPDATE books SET name = '` + b.name + `' WHERE id = ` + req.params.id;

    Connect()
        .then((connection) => {
            Querry(connection, query)
                .then((result) => {
                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { book };
