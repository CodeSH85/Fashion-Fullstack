const Sequelize = require('sequelize');
const database = require('../utils/_dbconfig');

// ============================================

const Category = database.define('category', {
  id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
});

module.exports = Category;
