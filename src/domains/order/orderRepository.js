const Order = require('./orderModel');

class OrderRepository {
  async createOrder(data) {
    return await Order.create(data);
  }

  async findById(id) {
    return await Order.findByPk(id);
  }

  async update(order) {
    await Order.update({
      table_number: order.table_number,
      total_price: order.total_price,
    }, { where: { id: order.id } });
    return order;
  }

  async findByTableNumber(table_number) {
    const order = await Order.findOne({
      where: {
        table_number: table_number
      },
      order: [['createdAt', 'DESC']]
    });
    return order;
  }
}

module.exports = new OrderRepository();
