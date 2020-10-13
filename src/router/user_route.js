const express = require('express');

const router = express.Router();
const user = require('../controllers/user')
const multer = require('multer');

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



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/uploadBlog",upload.single('image'), user.CreateBlog);
module.exports = router;