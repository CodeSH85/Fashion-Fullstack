const Products = require('../models/product');

//===========================================================


// 全部商品資料 api
const getAllProducts = (req, res) => {
  Products.findAll()
  .then((product) => {
    res.send((product));
  })
  .catch((err) => {
    console.log('Products.findAll() error: ', err);
  });
};

// 個別商品資料 api
const getProduct = (req, res) => {
	const { id } = req.params['id'];
	Products.findOne({
		where: {
			id: id
		},
	})
	.then((product)=>{
		return res.send(product);
	})
	.catch((err)=>{
		return res.send(err);
	})
};


// 購物車
// 取得使用者購物車
const getCart = (req, res) => {
  req.user 
    .getCart() 
    .then((cart) => {
      return cart.getProducts()
        .then((products) => {
          res.send(products);
        })
        .catch((err) => {
          console.log('getCart - cart.getProducts error: ', err);
        });
    })
    .catch((err) => {
      console.log('getCart - user.getCart error', err);
    });
};

// 商品加入購物車
const postCartAddItem = (req, res) => {
  const { color, size, number } = req.body;
  const { productId } = req.params.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProductEntry({ 
        // 規格處理
        where: { 
          id: productId,
          color,
          size,
          number
         }});
    })
    .then((product) => {
      return res.send(product);
    })
    .catch((err) => {
      console.log('postCartAddItem error: ', err);
    })
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

const getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: ['products']})
    .then((orders) => {
      console.log('orders', orders)
      res.render('shop/orders', {
        orders,
      });
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

module.exports = {
  getAllProducts,
  getProduct,
  getCart,
  getOrders,
  postCartAddItem,
  postCartDeleteItem,
  postOrder,
}
