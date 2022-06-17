const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Products = database.define('products', {
  product_id: {
    type: Sequelize.INTEGER, // 資料的型別
    autoIncrement: true, // 資料是否會自動增加（一般用於 id）
    allowNull: false, // 是否接受 null 值
    primaryKey: true, // 是否為 Primary Key
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  img:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  size:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  category:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  color:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  material: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  spec: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: true,
  }

});

module.exports = Products;