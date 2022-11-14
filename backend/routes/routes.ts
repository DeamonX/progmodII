import bodyParser from 'body-parser';
import express from 'express';
import getBookController from '../controller/getBook';
import postBookController from '../controller/postBook';
import putBookController from '../controller/putBook';
import deleteBookController from '../controller/deleteBook';

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get('/books', getBookController.book);
router.get('/book/:id', getBookController.book);
router.post('/book', urlencodedParser, postBookController.book);
router.delete('/book/:id', deleteBookController.book);
router.put('/book/:id', urlencodedParser, putBookController.book);

export = router;
