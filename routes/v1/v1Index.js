import express from 'express';
const router = express.Router();

import moviesListIndex from './moviesList/moviesListIndex.js';
import { checkApiAuth } from '../../authentication/checkApiAuth.js';

/* GET home page. */
router.get('/movies', checkApiAuth, moviesListIndex);

export default router;