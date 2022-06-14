const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Product = database.define('product', {
  id: {
    type: Sequelize.INTEGER, // 資料的型別
    autoIncrement: true, // 資料是否會自動增加（一般用於 id）
    allowNull: false, // 是否接受 null 值
    primaryKey: true, // 是否為 Primary Key
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  material: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  clothesSize: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  specification: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  modelSize: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Product;
