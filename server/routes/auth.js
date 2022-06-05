const Express = require('express');

const authController = require('../controllers/auth');

//===============================================================

const router = Express.Router();

router.get('/', authController.getIndex);

module.exports = router;
