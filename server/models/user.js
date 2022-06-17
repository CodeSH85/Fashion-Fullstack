const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================


const User = database.define('user', {
  id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
  },
  email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
  },
  password: {
      type: Sequelize.STRING,
      allowNull: false,
  }
});

module.exports = User;
