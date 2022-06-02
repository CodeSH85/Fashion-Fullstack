const Product = require('../models/product');

// =================================================

const getIndex = (req, res) => {
  res.status(200).render('index')
}


module.exports = {
  getIndex,
}