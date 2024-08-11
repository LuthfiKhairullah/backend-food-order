const orderItemRepository = require('./orderItemRepository');

class OrderItemService {
  async createOrderItem(orderItemData) {
    const orderItem = await orderItemRepository.createOrderItem(orderItemData);
    return orderItem;
  }

  async findByOrder(order_id) {
    const orderItem = await orderItemRepository.findByOrder(order_id);
    return orderItem;
  }

  async findByOrderAndCategory(order_id, category) {
    const orderItem = await orderItemRepository.findByOrderAndCategory(order_id, category);
    return orderItem;
  }
}

module.exports = new OrderItemService();
