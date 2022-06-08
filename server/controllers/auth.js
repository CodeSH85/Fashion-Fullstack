const { appendFile } = require('fs');
const path = require('path');

const db = require('../utils/database.js')
// const User = require('../models/user');

// ===================================================

const getLogin = (req, res) => {
  // const errorMessage = req.flash('errorMessage')[0];
  res.status(200);
  console.log(req.body);
};

// 會員登入
const postLogin = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE name='${email}' AND password='${password}';`;
  db.query(sql,(err, results) => {
    if(err) throw err;
    res.status(200).redirect('/');
  })
};

const getSignup = (req, res) => {
  // const errorMessage = req.flash('errorMessage')[0];
  res.status(200);
  console.log(req.body);
};

// 會員註冊
const postSignup = (req, res) => {
  const { email, password } = req.body;
  const sql = `INSERT INTO users (email, password, valid) VALUES ('${email}', '${password}', 1)`;
  // const errorMessage = req.flash('errorMessage')[0];
  db.query(sql,(err, results) => {
    if(err) throw err;
    res.status(200).send(email);
  });
};


const getSql = (req, res) => {
  const sql = `SELECT * FROM PRODUCT`;
  db.query(sql, (err, results) => {
    if(err) throw err;
    results.forEach((res)=>{
      console.log(res.title);
    });
    res.send(results.title);
  });
};

module.exports = {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
  getSql
};
