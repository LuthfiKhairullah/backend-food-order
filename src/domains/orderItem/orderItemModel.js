const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const OrderItem = sequelize.define('order_items', {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  variant: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sub_total: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = OrderItem;
