const db = require('../utils/database.js');
const bcryptjs = require('bcryptjs');
// const User = require('../models/user');

// ===================================================

// 會員註冊 Signup
const postSignup = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcryptjs.hash(password, 12);
  const emailExistsSql = `SELECT email FROM users WHERE email='${email}'`;
  const signUpSql = `INSERT INTO users (email, password, valid) VALUES ('${email}', '${hashedPassword}', 1)`;

  db.query(emailExistsSql, (err, data)=>{
    if(err){
      console.error("An error occurred:", err.message); 
      res.status(500).send(`伺服器出錯`).end();
    };
    // 判斷使用者是否重複註冊
    if(data.length >= 1){
      res.send(`註冊失敗，信箱已被使用過`).end();
    } else {
      db.query(signUpSql, (err, data) => {
        res.status(200).send(`註冊成功`);
        console.log(data);
      });
    };å
  }); 
};


// 會員登入 Login
const postLogin = (req, res) => {
  const { email, password } = req.body;
  const loginSql = `SELECT * FROM users WHERE email='${email}' AND password='${password}';`;
  if(email && password){
    db.query(loginSql, [email, password] ,(err, data) => {
      if(err){
        console.error("An error occurred:", err.message);
        // res.status(500).send(`An error occurred: ${err.message}`).end();
        res.status(500).send(`伺服器出錯`).end();
      }; 
      if(data.length == 0) {
        // 無使用者
        res.send(`email或密碼錯誤`).end();
        console.log(data);
      } else {
        // 登入成功
        // res.session.isLogin = true;
        console.log(req.body);
        res.status(200).redirect('/');
      };
    });
  } else {
    res.send(`請輸入信箱和密碼`).end();
  };
};

// 會員登出
const postLogout = (req, res) => {
  db.query(logoutSql, (err, data) => {
    req.session.destroy((err) => {
      console.log('session destroy() error: ', err);
    });
  });
};

// 取得會員資料



module.exports = {
  postLogin,
  postLogout,
  postSignup,
};
