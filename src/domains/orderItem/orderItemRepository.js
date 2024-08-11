const OrderItem = require('./orderItemModel');
const { Op } = require('sequelize');

class OrderItemRepository {
  async createOrderItem(data) {
    return await OrderItem.create(data);
  }

  async findById(id) {
    return await OrderItem.findByPk(id);
  }

  async findByOrder(order_id) {
    const orderItem = await OrderItem.findAll({
      where: {
        order_id: order_id
      }
    });
    return orderItem;
  }

  async findByOrderAndCategory(order_id, category) {
    const orderItem = await OrderItem.findAll({
      where: {
        order_id: order_id,
        category: {
          [Op.like]: `%${category}%`
        }
      }
    });
    return orderItem;
  }
}

module.exports = new OrderItemRepository();
