// 模組 ================================================================
// 全域環境
require('dotenv').config();

// 內建模組
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
// 路由
const router = require('./routes/route');

// model
const database = require('./utils/database');
const Product = require('./models/product');
const ProductEntry = require('./models/product_entry');
const Size = require('./models/size');
const Color = require('./models/color');
const Category = require('./models/category');
const Img = require('./models/img');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const User = require('./models/user');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

// JSON 資料
const productData = require('./public/product.json')
const productEntryData = require('./public/product_entry.json')
const colorData = require('./public/color.json')
const sizeData = require('./public/size.json')
const categoryData = require('./public/category.json')
const data = require('./public/data.json')


// ==================================================================

// Variable
const port = process.env.PORT || 3001;

// Use Express
const app = new Express();
app.use(Express.urlencoded({ extended : false }));
app.use(bodyParser.json());


// Use cors 解決跨域問題
app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Routes 路由 ==============================================================
    
app.use(router);
    
app.use(Express.static(path.join(__dirname, '../client/dist'))); // 使用靜態資源

app.get('/', function(req, res){
	res.sendFile(__dirname,'../dist/index.html');
	
});
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, './views', 'index.html'));
// });
app.use(history());


// Use Session 
app.use(session({ 
  secret: 'sessionToken',  // 加密用的字串
  isLogin: false,  
	resave: false,   // 沒變更內容是否強制回存
	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
	cookie: {
    maxAge: 10000,
    httpOnly: false,
	}
})); 


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
        console.log('custom middleware - findUserBySession error: ', err);
    })
});

app.use((req, res, next) => {
  // res.locals.path = req.url;
  res.locals.isLogin = req.session.isLogin || false; // 在local中儲存isLogin變數供所有視圖使用
  // res.locals.csrfToken = req.csrfToken();
  next();
});

// 關聯式資料庫 ==========================================================

Product.belongsToMany(Category,{
  through: {
      model: ProductEntry,
      unique: false,
  },
  foreignKey: 'categoryId',
  constraints: false
});

Product.belongsToMany(Color, {
  through: {
      model: ProductEntry,
      unique: false,
  },
  foreignKey: 'colorId',
  constraints: false
});

Product.belongsToMany(Size, {
  through: {
      model: ProductEntry,
      unique: false,
  },
  foreignKey: 'sizeId',
  constraints: false
});

ProductEntry.belongsTo(Product);
Product.hasMany(ProductEntry);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(ProductEntry, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{ through: OrderItem });


// Use Sequelize ===========================================================

database
  // .query("SET FOREIGN_KEY_CHECKS = 0")
  // .then()
  .sync({
    force: true
  }) // 和 db 連線時，強制重設 db
  .then((result) => {
    Product.bulkCreate(productData);
    ProductEntry.bulkCreate(productEntryData);
    Size.bulkCreate(sizeData);
    Color.bulkCreate(colorData);
    Category.bulkCreate(categoryData);
    // Product.bulkCreate(data);
    app.listen(port, () => {
      console.log(`Web Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('create web server error: ', err);
  });
