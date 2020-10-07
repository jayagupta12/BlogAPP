const express=require('express');

const router=express.Router();
const user=require('../controllers/user')

router.post('/createUser',user.CreateUser)
router.post('/loginUser',user.LoginUser)
module.exports=router;