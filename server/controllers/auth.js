const { appendFile } = require('fs');
const path = require('path');

const db = require('../utils/database.js')
// const User = require('../models/user');

// ===================================================

const getIndex = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'index.html'));
};

const postLogin = (req, res) => {
  const {email, password} = req.body
  res.status()
};

const getSql = (req, res) => {
  let sql = `SELECT * FROM PRODUCT WHERE product_id = 3`;
  let query = db.execute(sql, (err, results) => {
    if(err) throw err;
    results.forEach((res)=>{
      console.log(res.title);
    })
    res.send(results.title);
  })
};

module.exports = {
  getIndex,
  postLogin,
  getSql
};
