import express from 'express';
import { getMovieList } from './moviesController.js';
const router = express.Router();

/**
 * @swagger
 * /v1/movies:
 *  get:
 *    summary: Return a list of movies
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *            type: integer 
 *        description: Required page number data for movies
 *    responses:
 *      200:
 *        description: A successful response
 *      401:
 *        description: Unauthorized access
 */
router.use('/', getMovieList);

export default router;