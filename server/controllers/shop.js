const e = require('connect-flash');

const db = require('../utils/database.js')

// ===================================================

// 全部商品資料 api
const getProducts = (req, res) => {
  // const sql = `
  // SELECT * FROM product 
  // JOIN product_entry ON product.product_id = product_entry.product_id
  // GROUP BY product.product_id;
  // `;
  // SELECT product.product_id, product.title, product.price, product.desc, product.material, product.spec, product.model,
  const sql = `
  SELECT *
  FROM product
  INNER JOIN product_entry ON product_entry.product_id = product.product_id
  INNER JOIN size ON product_entry.size_id = size.size_id
  INNER JOIN color ON product_entry.color_id = color.color_id
  INNER JOIN img ON product.product_id = img.img_id
  WHERE img_url
  IN (SELECT MIN (img_url) AS expr0 FROM img GROUP BY product_id);
  `;
  // ORDER BY product_entry.sku ASC
  db.query(sql, (err, data) => {
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    }else{
      res.status(200).send(data);
    };
  });
};

// 首頁商品圖片 api
const getImgs = (req, res) => {
  const getImgSql = `
  SELECT * FROM img WHERE img_url
  IN (SELECT MIN(img_url) AS expr0 FROM img GROUP BY product_id)
  ;
  `;
  db.query(getImgSql, (err, data)=>{
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
    res.send(data);
  });
};

// 購物車 ============================
// 顯示購物車
const getCart = (req, res) => {
  const productId = req.params.productId;
  const getCartSql = `
  SELECT cart_id,user.user_id,product.product_id,product_name,product_price,product_img_url,goods_num,product_num
  FROM product,user,goods_cart,shop 
  where product.product_id=goods_cart.product_id AND user.user_id=goods_cart.user_id AND shop.shop_id = product.shop_id
  ;`;
  
  const getCartProductSql = `
  ;`;
  
  db.query(getCartSql,(err, data)=>{
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    }else{
      db.query(getCartProductSql, (err, data) => {
        if(err){
          console.error("An error occurred:", err.message);
          res.status(500).send(`伺服器出錯`).end();
        }else{
          res.status(200).send(data);
        };
      });
    };
  });
};

// 購物車中加入商品
const postAddCartItem = (req, res) => {
  const productId = req.params.productId;
  const {size, color, quantity, img_url} = req.body;
  const userCart = [];
  let newQuantity = 1;
  // const postCartSql = 
  // `INSERT INTO cart (product_id, size, color, quantity, img_url)
  //  VALUES ('${productId}','${size}','${color}, ${quantity}, ${img_url}');
  // `;
  const postCartSql = 
  `SELECT sku FROM product_entry
  WHERE VALUES ('${productId}','${size}','${color}, ${quantity}, ${img_url}');
  `;
  db.query(postCartSql, (err, data)=>{
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
  });
};

// 購物車中移除商品
const postDelCartItem = (req, res) => {
  const delCartItemSql = `
  DELETE 
  ;`;
  db.query(delCartItemSql, (err, data)=> {
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
  });
};

// 訂單 ============================
// 顯示訂單
const getOrder = (req, res) => {
  const productId = req.body;
  const getOrderSql = `
  ;`;
  db.query(getOrderSql, (err, data) => {
    
  });
};

// 創建訂單
const postOrderItem = (req, res) => {
  const cartid = res.params;
  const orderItemSql = `
  INSERT INTO order_item (product_id)
  ;`;
  db.query(orderItem, (err, data) => {
    
  });
};


module.exports = {
  getCart,
  getProducts,
  getImgs,
  postAddCartItem
};
