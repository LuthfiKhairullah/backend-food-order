const TableNumber = require('./tableNumberModel');

class TableNumberRepository {
  async createTableNumber(data) {
    return await TableNumber.create(data);
  }

  async findById(id) {
    return await TableNumber.findByPk(id);
  }

  async findByTableNumber(table_number) {
    const tableNumber = await TableNumber.findOne({
      where: {
        table_number: table_number
      }
    });
    return tableNumber;
  }
}

module.exports = new TableNumberRepository();
