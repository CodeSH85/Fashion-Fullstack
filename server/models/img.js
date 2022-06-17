const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const Img = database.define('img', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{ timestamps: false });
  
module.exports = Img;
