const Express = require('express');

const authController = require('../controllers/auth');

//===============================================================

const router = Express.Router();

// router.get('/', authController.getIndex);

router.get('/sql', authController.getSql);
router.post('/signUp', authController.postSignup);

module.exports = router;
