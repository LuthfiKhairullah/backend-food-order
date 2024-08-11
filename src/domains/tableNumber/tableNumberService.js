const tableNumberRepository = require('./tableNumberRepository');

class TableNumberService {
  async createTableNumber(tableNumberData) {
    const tableNumber = await tableNumberRepository.createTableNumber(tableNumberData);
    return tableNumber;
  }

  async findById(id) {
    const tableNumber = await tableNumberRepository.findById(id);
    return tableNumber;
  }

  async findByTableNumber(table_number) {
    const tableNumber = await tableNumberRepository.findByTableNumber(table_number);
    return tableNumber;
  }
}

module.exports = new TableNumberService();
