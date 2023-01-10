import bodyParser from 'body-parser';
import express from 'express';

import getBookController from '../controller/Book/getBook';
import postBookController from '../controller/Book/postBook';
import putBookController from '../controller/Book/putBook';
import deleteBookController from '../controller/Book/deleteBook';

import getCategoryController from '../controller/Category/getCategory';
import postCategoryController from '../controller/Category/postCategory';
import putCategoryController from '../controller/Category/putCategory';
import deleteCategoryController from '../controller/Category/deleteCategory';

import getAuthorController from '../controller/Author/getAuthor';
import postAuthorController from '../controller/Author/postAuthor';
import putAuthorController from '../controller/Author/putAuthor';
import deleteAuthorController from '../controller/Author/deleteAuthor';

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();
//Book
router.get('/books', getBookController.book);
router.get('/book/:id', getBookController.book);
router.post('/book', urlencodedParser, postBookController.book);
router.delete('/book/:id', deleteBookController.book);
router.put('/book/:id', urlencodedParser, putBookController.book);
//Category
router.get('/category', getCategoryController.category);
router.get('/category/:id', getCategoryController.category);
router.post('/category', urlencodedParser, postCategoryController.category);
router.delete('/category/:id', deleteCategoryController.category);
router.put('/category/:id', urlencodedParser, putCategoryController.category);
//Author
router.get('/author', getAuthorController.author);
router.get('/author/:id', getAuthorController.author);
router.post('/author', urlencodedParser, postAuthorController.author);
router.delete('/author/:id', putAuthorController.author);
router.put('/author/:id', urlencodedParser, deleteAuthorController.author);

export = router;
