const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Color = database.define('color', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
  
module.exports = Color;

