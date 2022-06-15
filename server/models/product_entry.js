const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Product_entry = database.define('product_entry', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER, // 資料的型別
    allowNull: false, // 是否接受 null 值
    primaryKey: true
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sizeId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  colorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  }
});

module.exports = Product_entry;
