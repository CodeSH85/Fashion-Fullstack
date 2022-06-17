const Express = require('express');
const path = require('path')
const authController = require('../controllers/auth');
const shopController = require('../controllers/shop'); 
const isLogin = require('../Authguard/isLogin.js')
//===============================================================

const router = Express.Router();

// router.get('/', authController.getIndex);

// api
router.get('/api/getAllProducts', shopController.getAllProducts);


// auth
router.post('/post/signup', authController.postSignup);
router.post('/post/login', authController.postLogin);
router.post('/post/logout', authController.postLogout);


router.get('/shopcart', isLogin, (req, res) => {
  res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
})

router.get('/member', isLogin, (req, res) => {
    res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
})

router.get('/checkout', isLogin, (req, res) => {
    res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
})

router.get('/order', isLogin, (req, res) => {
    res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
})


router.get('/authApi', (req, res) => {
	if (req.session.email) {
		console.log('authenticated')
		return res.send({status: 1,})
	} 
	else {
		console.log('not authenticated')
		return res.send({status: 0})
	}    
});

module.exports = router;
