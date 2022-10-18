import express from "express";
import controller from '../controller/getBook'

const router = express.Router();

router.get('/books', controller.book);



export = router;