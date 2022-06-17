const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Size = database.define('size', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{ timestamps: false });
  
module.exports = Size;

