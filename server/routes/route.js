const Express = require('express');
const path = require('path')
const authController = require('../controllers/auth');
const shopController = require('../controllers/shop'); 

//===============================================================

const router = Express.Router();

// router.get('/', authController.getIndex);

// api
router.get('/api/getAllProducts', shopController.getAllProducts);
router.get('/api/getProduct/:id', shopController.getProduct);


// auth
router.post('/post/signup', authController.postSignup);
router.post('/post/login', authController.postLogin);
router.post('/post/logout', authController.postLogout);


module.exports = router;
