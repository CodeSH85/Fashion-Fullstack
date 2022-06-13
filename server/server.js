// 模組 ================================================================
// 全域環境
require('dotenv').config();

// 內建模組
const http = require('http')
const path = require('path');

// 第三方模組
const Express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectFlash = require('connect-flash');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const csrfProtection = require('csurf');

// 自訂模組
const database = require('./utils/database');
const Product = require('./models/product');
// const Products = require('./models/products');
const ProductEntry = require('./models/product_entry');
const Size = require('./models/size');
const Img = require('./models/img');
const Color = require('./models/color');
const Category = require('./models/category');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const User = require('./models/user');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

// JSON 資料
const productData = require('./public/product.json')
const sizeData = require('./public/size.json')
const colorData = require('./public/color.json')
const categoryData = require('./public/category.json')
const pdtEntryData = require('./public/product_entry.json')


// ==================================================================


// Variable
const port = process.env.PORT || 3001;


// Use Express
const app = new Express();
app.use(connectFlash());
app.use(Express.urlencoded({ extended : false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findByPk(req.session.user.id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log('find user by session id error: ', err);
    })
});


// session 
app.use(session({ 
  isLogin: false,  
  secret: 'sessionToken',  // 加密用的字串
	resave: false,   // 沒變更內容是否強制回存
	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
	cookie: {
    maxAge: 10000 // session 狀態儲存多久？單位為毫秒
	}
})); 

app.use((req, res, next) => {
  res.locals.pageTitle = 'Book Your Books online';
  res.locals.path = req.url;
  res.locals.isLogin = req.session.isLogin || false; // 在local中儲存isLogin變數供所有視圖使用
  res.locals.csrfToken = req.csrfToken();
  next();
});

// 關聯式資料庫
ProductEntry.belongsTo(Product);
Product.hasMany(ProductEntry);

Category.belongsToMany(Product, {
  through: {
    model: ProductEntry,
    unique: false,
  },
  foreignKey: 'category_id',
});

Color.belongsToMany(Product, {
  through: {
      model: ProductEntry,
      unique: false,
  },
  foreignKey: 'color_id',
});

Size.belongsToMany(Product, {
  through: {
      model: ProductEntry,
      unique: false,
  },
  foreignKey: 'size_id',
});

ProductEntry.belongsTo(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
ProductEntry.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(ProductEntry, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{ through: OrderItem });

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
// app.use(router);

// 根目錄
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, '../client/dist'));
// });
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, './views', 'index.html'));
// });
// app.use(Express.static(path.join(__dirname, '../client/dist'))); // 使用靜態資源
app.use(history());

// ==============================================================

// 使用Sequelize連結 DB
database
  // .sync()
  // 清空資料庫 == 有關聯式資料庫語法 
  // .query("SET FOREIGN_KEY_CHECKS = 0")
  // .then(()=>{
  //     database.sync({ force: true})
  //     .then(()=>{
  //       database.query("SET FOREIGN_KEY_CHECKS = 1")
  //     })
  // })
  .sync({
    // force: true
  }) // 和 db 連線時，強制重設 db
  .then((result) => {
    // Product.bulkCreate(productData);
    // Size.bulkCreate(sizeData);
    // Color.bulkCreate(colorData);
    // Category.bulkCreate(categoryData);
    // ProductEntry.bulkCreate(pdtEntryData);
    app.listen(port, () => {
      console.log(`Web Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('create web server error: ', err);
  });
