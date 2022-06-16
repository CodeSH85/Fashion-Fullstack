const bcryptjs = require('bcryptjs');

const User = require('../models/user');

// ==========================================================

// 使用者註冊
const postSignup = (req, res) => {
  // 前端回傳資料
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        // 使用者已存在的情況
        return res.send({ status : 0 });
      } else { 
        bcryptjs.hash(password, 12) // 密碼加密
          .then((hashedPassword) => {
            User.create({ email, password: hashedPassword })
              .then((newUser) => {
              newUser.createCart();
              return res.send({ status : 1 });
              })
              .catch((err) => {
                console.log('postSignup - newUser.carateCart error: ', err);
                return res.send({ status : 0 });
              });
          })
          .catch((err) => {
            console.log('create new user error: ', err);
            return res.send({ status : 0 });
          })
      };
    })
    .catch((err) => {
      console.log('signup error', err);
      return res.send({ status : 0 });
    });
};

// 使用者登入
const postLogin = (req, res) => {

  const { email, password } = req.body;

  // 以 email 判斷是否已註冊
  User.findOne({ where: {email} })
    .then((user) => {
      // 若無此使用者
      if (!user) {
        return res.send({ status : 0 });
      };
      bcryptjs
      .compare(password, user.password)
      .then( (isMatch) => {
        // 成功登入
        if (isMatch) {
          req.session.user = user;
          req.session.isLogin = true;
          return res.send({ status : 1 });
        } else {
          // 帳密錯誤
          return res.send({ status : 0 });
        };
      })
      .catch((err) => {
        console.log('login error:', err);
        return res.send({ status : 0 });
      });
    })
    .catch((err) => {
      console.log('login error:', err);
      return res.send({ status : 0 });
    });
};

// 使用者登出
const postLogout = (req, res) => {
  // 刪除 session
  req.session.destroy();
};

module.exports = {
  postLogin,
  postLogout,
  postSignup
};
