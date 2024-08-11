const HistoryPrint = require('./historyPrintModel');

class HistoryPrintRepository {
  async createHistoryPrint(data) {
    return await HistoryPrint.create(data);
  }

  async findById(id) {
    return await HistoryPrint.findByPk(id);
  }
}

module.exports = new HistoryPrintRepository();
