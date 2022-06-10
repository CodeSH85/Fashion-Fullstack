const { appendFile } = require('fs');

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
  ORDER BY product_entry.sku ASC
  ;`;
  db.query(sql, (err, results) => {
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
    res.send(results);
  });
};

// 首頁商品圖片
const getImgs = (req, res) => {
  const getImgSql = `
  SELECT * FROM img WHERE img_url
  IN (SELECT MIN(img_url) AS expr0 FROM img GROUP BY product_id)
  ;
  `;
  db.query(getImgSql, (err, result)=>{
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
    res.send(result);
  });
};

// 加入購物車
const postCartItem = (req, res) => {
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
  db.query(postCartSql, (err, result)=>{
    if(err){
      console.error("An error occurred:", err.message);
      res.status(500).send(`伺服器出錯`).end();
    };
  });
};

//


module.exports = {
  getProducts,
  getImgs,
  postCartItem
};
