const { appendFile } = require('fs');
const path = require('path');

const db = require('../utils/database.js')
// const User = require('../models/user');

// ===================================================

const getLogin = (req, res) => {
  const errorMessage = req.flash('errorMessage')[0];
  res.status(200)
    .render('auth/login', {
      errorMessage
    });
};

const postLogin = (req, res) => {
  const sql = `SELECT * FROM users WHERE email='email' AND password='password'`;
  res.status(200);
};

const getSignup = (req, res) => {
  const errorMessage = req.flash('errorMessage')[0];
  res.status(200)
    .render('auth/signup', {
      errorMessage
    });
};

const postSignup = (req, res) => {
  const sql = `INSERT INTO users (email,password, createdAt, valid) VALUES 
  ('email', 'password', 'now', 1)`;
  const errorMessage = req.flash('errorMessage')[0];
  res.status(200)
    .render('auth/signup', {
      errorMessage
    });
};


const getSql = (req, res) => {
  const sql = `SELECT * FROM PRODUCT`;
  db.execute(sql, (err, results) => {
    if(err) throw err;
    results.forEach((res)=>{
      console.log(res.title);
    });
    res.send(results.title);
  })
};

module.exports = {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
  getSql
};
