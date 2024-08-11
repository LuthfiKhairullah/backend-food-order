const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const TableNumber = sequelize.define('tables', {
  table_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = TableNumber;
