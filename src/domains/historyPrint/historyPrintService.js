const historyPrintRepository = require('./historyPrintRepository');

class HistoryPrintService {
  async createHistoryPrint(historyPrintData) {
    const historyPrint = await historyPrintRepository.createHistoryPrint(historyPrintData);
    return historyPrint;
  }
}

module.exports = new HistoryPrintService();
