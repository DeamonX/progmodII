import express from "express";
import controller from '../controller/sample'

const router = express.Router();

router.get('/getAllBooks', controller.getAllBooks);



export = router;