import express from 'express';
import { addNewUser, loginUser } from './usersController.js';
const router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /user/:
 *  get:
 *    summary: Returns a sample message
 *    responses:
 *      200:
 *        description: A successful response
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @swagger
 * /user/login: 
 *  post:
 *    summary: User login api
 *    requestBody:
 *      content:
 *        application/json:
 *          example:
 *            email: user@example.com
 *            password: user@1234
 *    responses:
 *      200:
 *        description: A successful response
 *      401:
 *        description: Invalid user or password 
 */
router.post('/login', loginUser);

 /**
 * @swagger
 * /user/add: 
 *  post:
 *    summary: User signup api
 *    requestBody:
 *      content:
 *        application/json:
 *          example:
 *            email: user@example.com
 *            password: user@1234
 *            firstname: user
 *            lastname: test
 *            role: [admin, user, superadmin, viewuser]
 *    responses:
 *      200:
 *        description: A successful response
 *      401:
 *        description: Invalid user or password 
 */
router.post('/add', addNewUser);

export default router;