import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Querry } from '../../config/mysql';
import { Author } from '../../entities';

const NAMESPACE = 'Controller of Post Author';

const author = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `is called.`);

    let author = req.body as Author;

    let query = `INSERT INTO author (family_name, given_name, date_of_birth) VALUES ('` + author.family_name + `','` + author.given_name + `','` + author.date_of_birth + `')`;

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

export default { author };
