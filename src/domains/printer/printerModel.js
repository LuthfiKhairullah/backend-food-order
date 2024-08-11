const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Printer = sequelize.define('printers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Printer;
