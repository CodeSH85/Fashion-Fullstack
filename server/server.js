// 模組 ================================================================
// 全域環境
require('dotenv').config();

// 內建模組
const path = require('path');

// 第三方模組
const Express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectFlash = require('connect-flash');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const csrfProtection = require('csurf');

// 自訂模組
// 路由
const router = require('./routes/route');

// database
const database = require('./utils/database');

// model
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
const imgData = require('./public/img.json')


// ==================================================================

// Variable
const port = process.env.PORT || 3001;

// Use Express
const app = new Express();
app.use(Express.urlencoded({ extended : false }));
app.use(bodyParser.json());

// cors 跨域問題
app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://localhost:8080'
  ],
  credentials: true,
  exposedHeaders: ['set-cookie']
}));

// Use Session 
app.use(session({ 
  secret: 'sessionToken',  // 必要屬性：加密用的字串
  isLogin: false,  
	resave: false,   // 必要屬性：沒變更內容是否強制回存
  name: 'user',
	saveUninitialized: false ,  // 新session未變更內容是否儲存
	cookie: { maxAge: 10000, secure: false, httpOnly: false } // cookie持續時間
})); 

app.use((req, res, next) => {
  // res.locals.path = req.url;
  res.locals.isLogin = req.session.isLogin || false; // 在local中儲存isLogin變數供所有視圖使用
  // res.locals.csrfToken = req.csrfToken();
  next();
});

// user 資料存到 res.user 
app.use((req, res, next) => {
  // 未登入
  if (!req.session.user) {
    return next();
  }
  // 登入
  User.findByPk(req.session.user.id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
        console.log('custom middleware - findUserBySession error: ', err);
    })
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

// 資料庫 ==========================================================

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Img);
Img.belongsTo(Product);

Product.belongsToMany(Color, {
  through: {
    model: ProductEntry,
    unique: false,
  },
  foreignKey: 'productId',
  // constraints: false
});

Color.belongsToMany(Product, {
  through: {
    model: ProductEntry,
    unique: false,
  },
  // foreignKey: 'colorId',
  // constraints: false
});

Product.belongsToMany(Size, {
  through: {
    model: ProductEntry,
    unique: false,
  },
  foreignKey: 'productId',
  // constraints: false
});

Size.belongsToMany(Product, {
  through: {
    model: ProductEntry,
    unique: false,
  },
  // foreignKey: 'sizeId',
  // constraints: false
});

// Product.hasMany(ProductEntry);
// ProductEntry.belongsTo(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(ProductEntry, { through: CartItem });
ProductEntry.belongsToMany(Cart, { through: CartItem, unique: false});

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{ through: OrderItem });


// Use Sequelize ===========================================================

database
  // .query("SET FOREIGN_KEY_CHECKS = 0")
  // .then(()=>{
  //   database.sync({ force: true})
  //   .then(()=>{
  //     database.query("SET FOREIGN_KEY_CHECKS = 1")
  //   })
  // })
  .sync({
    // force: true
  }) // 和 db 連線時，強制重設 db
  .then((result) => {
    // Category.bulkCreate(categoryData);
    // Img.bulkCreate(imgData);
    // Color.bulkCreate(colorData);
    // Size.bulkCreate(sizeData);
    // Product.bulkCreate(productData);
    // ProductEntry.bulkCreate(productEntryData);
    app.listen(port, () => {
      console.log(`Web Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('create web server error: ', err);
  });
  