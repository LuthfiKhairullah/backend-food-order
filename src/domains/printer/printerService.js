const printerRepository = require('./printerRepository');

class PrinterService {
  async createPrinter(printerData) {
    const printer = await printerRepository.createPrinter(printerData);
    return printer;
  }

  async findByCategory(category) {
    const printer = await printerRepository.findByCategory(category);
    return printer;
  }

  async findById(id) {
    const printer = await printerRepository.findById(id);
    return printer;
  }
}

module.exports = new PrinterService();
