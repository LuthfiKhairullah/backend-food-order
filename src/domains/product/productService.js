const productRepository = require('./productRepository');

class ProductService {
  async createProduct(productData) {
    const product = await productRepository.createProduct(productData);
    return product;
  }

  async findById(id) {
    const product = await productRepository.findById(id);
    return product;
  }
}

module.exports = new ProductService();
