const { appendFile } = require('fs');
const path = require('path');
const { nextTick } = require('process');

const db = require('../utils/database.js')
// const User = require('../models/user');

// ===================================================

// 會員註冊
const postSignup = (req, res) => {
  const { email, password } = req.body;
  const emailExistsSql = `SELECT email FROM users WHERE email='${email}'`;
  const signUpSql = `INSERT INTO users (email, password, valid) VALUES ('${email}', '${password}', 1)`;

  db.query(emailExistsSql, (err, result)=>{
    if(err){
      console.error("An error occurred:", err.message); 
      res.status(500).send(`伺服器出錯`).end();
      return 0;
    };
    // 判斷使用者是否重複註冊
    if(result.length >= 1){
      res.send(`註冊失敗，信箱已被使用過`).end();
      return 0;
    } else {
      db.query(signUpSql, (err, result) => {
        res.status(200).send(`註冊成功`).end();
      });
    }
  }); 
};

// 會員登入
const postLogin = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE name='${email}' AND password='${password}';`;
  db.query(sql, (err, result) => {
    if(err){
      console.error("An error occurred:", err.message);
      // res.status(500).send(`An error occurred: ${err.message}`).end();
      res.status(500).send(`伺服器出錯`).end();
    } else{
      res.status(200).send(`登入成功`).redirect('/').end();
    };
  });
};



module.exports = {
  postLogin,
  postSignup
};
