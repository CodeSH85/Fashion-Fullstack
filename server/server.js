// 內建模組
const http = require('http')
const path = require('path');

// 第三方模組
const Express = require('express');
const cors = require('cors');
const session = require('express-session')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// 自訂模組
const database = require('./utils/dbconfig');
const authRouter = require('./routes/auth');
const Product = require('./models/product');
const User = require('./models/user');
const ImgUrl = require('./models/img-url');



// =====================================================================

// 變數
const hostname = '127.0.0.1';
const port = 3000;

// 使用 Express
const app = new Express();

// 使用 cors
app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

app.use(authRouter);

// app.get('/test', (req, res) => {
//   res.status(200).json({success : "true"})
// });

database.
// sync({ force: true })
sync()
  .then(()=>{
    app.listen(port, hostname, () => {
      console.log(`server is running at http://${hostname}:${port}/`);
    })
  })
  .catch((err) => {
    console.log('create web server error: ', err);
  });
