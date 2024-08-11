const Printer = require('./printerModel');

class PrinterRepository {
  async createPrinter(data) {
    return await Printer.create(data);
  }

  async findById(id) {
    return await Printer.findByPk(id);
  }

  async findByCategory(category) {
    const printer = await Printer.findOne({
      where: {
        category: category
      }
    });
    return printer;
  }
}

module.exports = new PrinterRepository();
