const path = require('path');

const User = require('../models/user');

// ===================================================

const getIndex = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'index.html'));
};

const postLogin = (req, res) => {
  const {email, password} = req.body
  res.status()
}

module.exports = {
  getIndex,
  postLogin,
};
