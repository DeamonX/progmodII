import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Querry } from '../../config/mysql';
import { Category } from '../../entities';

const NAMESPACE = 'Controller of Post Category';

const category = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `is called.`);

    let c = req.body as Category;

    let query = `INSERT INTO category (name) VALUES ('` + c.label + `')`;

    Connect()
        .then((connection) => {
            Querry(connection, query)
                .then((result) => {
                    return res.status(201).json({
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

export default { category };
