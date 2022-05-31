const User = require('../models/user');

// ===================================================

const getLogin = (req, res) => {
  const errorMessage = req.flash('errorMessage')[0];
  res.status(200)
    .render('auth/login', {
      pageTitle: 'Login',
      errorMessage
    });
};