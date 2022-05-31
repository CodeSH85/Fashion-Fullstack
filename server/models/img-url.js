const Sequelize = require('sequelize');
const database = require('../utils/dbconfig');

// ============================================

const Img = database.define('Img', {
  id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
  },
  imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
  }
});

module.exports = Img;
