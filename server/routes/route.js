const Express = require('express');

const authController = require('../controllers/auth');
const shopController = require('../controllers/shop');

//===============================================================

const router = Express.Router();

// router.get('/', authController.getIndex);

// api
router.get('/api/getProducts', shopController.getProducts);
router.get('/api/getImgs', shopController.getImgs);

router.post('/signup', authController.postSignup);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);


module.exports = router;
