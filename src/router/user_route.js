const express = require('express');

const router = express.Router();
const user = require('../controllers/user')


/**
 * @swagger
 * path:
 *  /auth/createUser:
 *    post:
 *     summary: register user
 *     description: register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type:string
 *               email:
 *                 type:string
 *               password:
 *                 type:string
 *     responses:
 *        "200":
 *          description: A user created
 *          content:
 *            application/json:
 *             schema:
 *              properties:
 *               name:
 *                 type:string
 *               email:
 *                 type:string
 *               password:
 *                 type:string
 *              
 */
router.post('/createUser', user.CreateUser)


/**
 * @swagger
 *
 * /auth/loginUser:
 *   post:
 *     description: login user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Request body
 *         description: request body for login
 *         in:  body
 *         required: true
 *         schema: 
 *           type: object
 *           properties:
 *             email:
 *                type: string
 *             password:
 *                 type: string
 *              
 *     responses:
 *       200:
 *         description: users
 *              
 */
router.post('/loginUser', user.LoginUser)





module.exports = router;