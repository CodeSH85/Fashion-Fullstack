require('dotenv').config();

// 內建模組
const http = require('http')
const path = require('path');

// 第三方模組

const Express = require('express');
const cors = require('cors');
const session = require('express-session')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const mysql = require('mysql2')

// 自訂模組
const db = require('./utils/database');
const authRouter = require('./routes/auth');
// const Product = require('./models/product');
// const User = require('./models/user');
// const ImgUrl = require('./models/img-url');


// =====================================================================

// 變數
const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

// 使用 Express
const app = new Express();

// 使用 cors
app.use(cors());

app.use(authRouter);


app.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}/`);
});

// database.
// // sync({ force: true })
// sync()
//   .then(()=>{
//     app.listen(port, hostname, () => {
//       console.log(`server is running at http://${hostname}:${port}/`);
//     })
//   })
//   .catch((err) => {
//     console.log('create web server error: ', err);
//   });
