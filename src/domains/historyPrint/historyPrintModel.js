const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const HistoryPrint = sequelize.define('history_prints', {
  printer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = HistoryPrint;
