require('dotenv').config();
const Sequelize = require('sequelize');

// =====================================================

const database = new Sequelize (
  'Jenn-Lee', 'root', 'root',{
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

module.exports = database;
