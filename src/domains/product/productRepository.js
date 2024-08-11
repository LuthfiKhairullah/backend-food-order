const Product = require('./productModel');

class ProductRepository {
  async createProduct(data) {
    return await Product.create(data);
  }

  async findById(id) {
    return await Product.findByPk(id);
  }
}

module.exports = new ProductRepository();
