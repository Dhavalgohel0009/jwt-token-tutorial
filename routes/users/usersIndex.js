import express from 'express';
import { addNewUser, loginUser } from './usersController.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', loginUser);

router.post('/add', addNewUser);

export default router;