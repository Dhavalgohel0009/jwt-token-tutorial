import express from 'express';
import { getMovieList } from './moviesController.js';
const router = express.Router();

/* GET home page. */
router.use('/', getMovieList);

export default router;