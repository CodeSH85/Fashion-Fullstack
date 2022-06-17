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
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  size_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  color_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  }
});

module.exports = Product_entry;
