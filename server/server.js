// 模組 ================================================================
// 全域環境
require('dotenv').config();

// 內建模組
const http = require('http')
const path = require('path');

// 第三方模組
const Express = require('express');
const cors = require('cors');
const session = require('express-session');
const connectFlash = require('connect-flash');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const history = require('connect-history-api-fallback');

// 自訂模組
const db = require('./utils/database');
const router = require('./routes/route');

// ==================================================================


// Variable
const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

// Connect to database
db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to database.");
});


// Use Express
const app = new Express();
app.use(connectFlash());
app.use(Express.urlencoded({ extended : true })); // 
app.use(bodyParser.json());

// session 
app.use(session({ 
	secret: 'sessionToken',  // 加密用的字串
	resave: false,   // 沒變更內容是否強制回存
	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
	cookie: {
		maxAge: 10000 // session 狀態儲存多久？單位為毫秒
	}
})); 

app.use((req, res, next) => {
  res.locals.isLogin = req.session.isLogin || false;
  next();
});

// Use cors
app.use(cors({  
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
}));
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


// Routes 路由 ==============================================================
app.use(router);

// 根目錄
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, '../client/dist'));
// });
app.get('/', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, './views', 'index.html'));
});
// app.use(Express.static(path.join(__dirname, '../client/dist'))); // 使用靜態資源
app.use(history());

// ==============================================================

app.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}/`);
});
