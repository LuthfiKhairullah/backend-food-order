const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Product = sequelize.define('products', {
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
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Product;
