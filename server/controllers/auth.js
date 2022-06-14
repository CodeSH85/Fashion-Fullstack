const bcryptjs = require('bcryptjs');

const User = require('../models/user');

// ==========================================================

// 使用者註冊
const postSignup = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        // 使用者已存在的情況
        return res.send('email已被使用');
      } else {
        return bcryptjs.hash(password, 12)
          .then((hashedPassword) => {
            return User
              .create({ email, password: hashedPassword })
              .then((newUser) => {
                return newUser.createCart();
              })
              .catch((err) => {
                console.log('postSignup - newUser.carateCart error: ', err);
              });
          })
          .catch((err) => {
            console.log('create new user error: ', err);
          })
      };
    })
    .catch((err) => {
      console.log('signup error', err);
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
        return res.send().end();
      };
      bcryptjs.compare(password, user.password)
        .then( isMatch => {
          if (isMatch) {
            req.session.user = user;
            req.session.isLogin = true;
            return req.session.save((err) => {
              console.log('postLogin - save session error: ', err);
            });
          } else {
            return req.send('錯誤的email或密碼');
          };
        })
        .catch((err) => {
          return res.send();
        });
    })
    .catch((err) => {
      console.log('login error:', err);
    });
};

// 使用者登出
const postLogout = (req, res) => {
  req.session.destroy();
  console.log('使用者已登出')
};

module.exports = {
  // getLogin,
  // getSignup,
  postLogin,
  postLogout,
  postSignup
};
