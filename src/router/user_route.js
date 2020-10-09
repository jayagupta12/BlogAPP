const express=require('express');

const router=express.Router();
const user=require('../controllers/user')


/**
 * @swagger
 * 
 * /auth/createUser
 *   post:
 *     summary:register user
 *     description:register a new user
 *     requestBody:
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
 */
router.post('/createUser',user.CreateUser)
router.post('/loginUser',user.LoginUser)
module.exports=router;