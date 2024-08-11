const orderRepository = require('./orderRepository');

class OrderService {
  async createOrder(orderData) {
    const order = await orderRepository.createOrder(orderData);
    return order;
  }

  async updateOrder(id, orderData) {
    const order = await orderRepository.findById(id);
    if(orderData.table_number != null) order.table_number = orderData.table_number;
    if(orderData.total_price != null) order.total_price = orderData.total_price;
    
    return await orderRepository.update(order);
  }
  
  async findByTableNumber(table_number) {
    const order = await orderRepository.findByTableNumber(table_number);
    return order;
  }

  calculatePrinters(items) {
    const printers = new Set();
    items.forEach(item => {
      if (item.category === 'Minuman') {
        printers.add('Printer1');
      } else if (item.category === 'Makanan') {
        printers.add('Printer2');
      }
    });
    return Array.from(printers);
  }
}

module.exports = new OrderService();
