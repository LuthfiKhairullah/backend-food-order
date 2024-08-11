const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Order = sequelize.define('orders', {
  table_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Order;
