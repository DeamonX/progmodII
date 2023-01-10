import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Querry } from '../../config/mysql';
import { Book } from '../../entities';

const NAMESPACE = 'Controller of Post Book';

const book = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `is called.`);

    let b = req.body as Book;

    let query = `INSERT INTO book (title, authorId, categoryId, price) VALUES ('` + b.title + `','` + b.authorId + `','` + b.categoryId + `','` + b.price + `')`;

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

export default { book };
