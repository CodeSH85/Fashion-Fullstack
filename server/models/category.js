const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Category = database.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{ timestamps: false });
  
module.exports = Category;

