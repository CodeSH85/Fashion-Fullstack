const Product = require('../models/product.js');
const ProductEntry = require('../models/product_entry.js');
const Size = require('../models/size.js');
const Color = require('../models/color.js');
const Category = require('../models/category.js');
const Img = require('../models/img.js');
const CartItem = require('../models/cart-item.js');

// ===========================================================


// 全部商品資料 api
const getAllProducts = (req, res) => {
  Product.findAll({
    include:[ Color, Size, Category, Img ]
  })
  .then((product) => {
    res.send((product));
  })
  .catch((err) => {
    console.log('Products.findAll() error: ', err);
  });
};

// 分類商品資料 api
const getCategoryProducts = (req, res) => {
	const { categoryId } = req.body;
	Products.findAll({
		where: {
			categoryId: categoryId 
		},
		include: [ Color, Img, Size ],
	})
	.then((products)=>{
		return res.send(products);
	})
	.catch((err)=>{
		return res.send(err);
	})
};


// 購物車資料 api
const getCart = (req, res) => {
	req.user
  .getCart()
	.then((cart)=>{
		CartItem.findAll({
			where: {
				cartId: cart.id
			},
		})
		.then((cart)=>{
			return res.send(cart);
		})
    .catch((err) => {
      console.log('getCart - cart.getProducts error: ', err);
		}) 
	});
};


// 刪除購物車商品
const postCartDeleteItem = (req, res, next) => {
  const { productId } = req.body;
  let userCart;
  req.user
    .getCart()
    .then((cart) => {
      userCart = cart;
      return cart.getProducts({ where: { id: productId }});
    })
    .then((products) => {
      const product = products[0];
      // cartItem 購物車中的產品項目，定義資料庫關係時透過cartItem連結
      return product.cartItem.destroy(); // 刪除項目 
    })
    .then(() => {
      return userCart
        .getProducts()
        .then((products) => {

        });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch((err) => console.log(err));
};

// 創建訂單
const postOrder = (req, res, next) => {
  let userCart;
  let orderAmount = 0;
  req.user
    .getCart()
    .then((cart) => {
      userCart = cart;
      orderAmount = cart.amount;
      return cart.getProducts();
    })
    .then((products) => {
      return req.user
        .createOrder({ amount: orderAmount })
        .then((order) => {
          return order.addProducts(products.map((product) => {
            product.orderItem = { quantity: product.cartItem.quantity };
            return product;
          }));
        })
        .then((result) => {
            return userCart.setProducts(null);
        })
        .then((result) => {
            res.redirect('/orders');
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

// 創建訂單
const postUserOrder = (req, res) => {
	req.user.getCart()
	.then((cart)=>{
		CartItem.findAll({
			where: {
				cartId: cart.id
			}
		})
		.then((cartItem)=>{
			return req.user.createOrder()
			.then((order)=>{
				let orderItemArr = []
				for(let i = 0; i <= cartItem.length - 1; i++){
					orderItemArr.push({
						quantity: cartItem[i].quantity,
						orderId: order.id,
						productentryId: cartItem[i].productentryId,
						bananaproductId: cartItem[i].bananaproductId		
					})
				}			
				// 建立訂單資料
				OrderItem.bulkCreate(orderItemArr)

			})
			.then(()=>{
				CartItem.destroy({
					where: {
						cartId: cart.id
					}
				})
				.then(()=>{
					console.log("已刪除購物車")
					return res.send({status: 1})
				})
				.catch((err)=>{
					console.log(err)
					return res.send({status: 0})
				})
			})
		})
		.catch((err)=>{
			console.log(err)
		})
	})
};

// 取得使用者訂單
const getUserOrders = (req, res) => {
  req.user
  .getOrders()
  .then((orders) => {
    let ordersArr = []
    for(let i = 0; i <= orders.length - 1; i++){
      ordersArr.push({
        orderId: orders[i].id
      })
    }
    return ordersArr
  })
  .then((result)=>{
    let promises = [] 
    for(let i = 0; i <= result.length - 1; i++){
      promises.push(OrderItem.findAll({
        where: {
          orderId: result[i].orderId
        }
      }))
    }
    Promise.all(promises)
    .then((resultArr)=>{
      return res.send(JSON.stringify(resultArr))
    })
  })
  .catch((err) => console.log(err));
};


module.exports = {
  getAllProducts,
  getCategoryProducts,

  getUserOrders,
  postUserOrder,

  getCart,
  postCartDeleteItem,
};
