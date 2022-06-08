const db = require('../utils/database');

// ==================================================

// constructor
const User = function(user) {
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  db.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

User.postSignup = (req, res) => {
  const { email, password } = req.body;
  const sql = `INSERT INTO users (email, password, valid) VALUES ('${email}', '${password}', 1)`;
  // const errorMessage = req.flash('errorMessage')[0];

  db.query(sql,(err, result) => {
    if(err) {
      console.log("error: ", err);
      result(err, null);
      return;
    };
  });
};