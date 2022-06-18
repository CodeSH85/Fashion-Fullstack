 // models/order-item.js

const Sequelize = require('sequelize');

const database = require('../utils/database');

//===========================================================

const OrderItem = database.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
},{ timestamps: false });

module.exports = OrderItem;
