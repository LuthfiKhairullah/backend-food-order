const orderService = require('../domains/order/orderService');
const orderItemService = require('../domains/orderItem/orderItemService');
const productService = require('../domains/product/productService');
const historyPrintService = require('../domains/historyPrint/historyPrintService');
const tableNumberService = require('../domains/tableNumber/tableNumberService');
const printerService = require('../domains/printer/printerService');

class OrderController {
  async createOrder(req, res) {
    try {
      let { table_number, items } = req.body;
      let total_price = 0;
      const orderData = { table_number, total_price };
      const order = await orderService.createOrder(orderData);
      const orderId = order.id;
      let categories = [];
      let printers = [];

      for (const item of items) {
        const product = await productService.findById(item.product_id);
        const sub_total = product.price * item.quantity;
        const category = product.category.split('|');
        item.order_id = orderId;
        item.product = product.product;
        item.category = product.category;
        item.variant = product.variant;
        item.price = product.price;
        item.sub_total = sub_total;
        orderData.total_price += sub_total;
        if(!categories.includes('Makanan') && category.includes('Makanan')) {
          categories.push('Makanan');
          const printer = await printerService.findByCategory('Makanan');
          printers.push(printer);
        }
        if(!categories.includes('Minuman') && category.includes('Minuman')) {
          categories.push('Minuman');
          const printer = await printerService.findByCategory('Minuman');
          printers.push(printer);
        }
        await orderItemService.createOrderItem(item);
      }

      await orderService.updateOrder(orderId, orderData);

      res.status(201).json({
        success: true,
        message: 'Order success',
        data: {
          table_number,
          total_price: orderData.total_price,
          items,
          printers
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }

  async getBill(req, res) {
    try {
      const { table_number } = req.params;
      const category = null;
      const tables = await tableNumberService.findByTableNumber(table_number);
      
      if(!tables) {
        return res.status(404).json({
          success: false,
          message: 'Table not found'
        });
      }

      const printers = await printerService.findByCategory(category);
      
      if(!printers) {
        return res.status(404).json({
          success: false,
          message: 'Printer not found'
        });
      }

      const orders = await orderService.findByTableNumber(table_number);
      
      if(!orders) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      
      const orderItems = await orderItemService.findByOrder(orders.id);
      const data_history = {
        printer_id: printers.id,
        order_id: orders.id,
      }

      await historyPrintService.createHistoryPrint(data_history);
      
      res.status(201).json({
        success: true,
        message: 'Print Bill successfully',
        data: {
          table_number: orders.table_number,
          total_price: orders.total_price,
          items: orderItems,
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }

  async getKitchen(req, res) {
    try {
      const { table_number } = req.params;
      const category = 'Makanan';
      const tables = await tableNumberService.findByTableNumber(table_number);
      
      if(!tables) {
        return res.status(404).json({
          success: false,
          message: 'Table not found'
        });
      }

      const printers = await printerService.findByCategory(category);
      
      if(!printers) {
        return res.status(404).json({
          success: false,
          message: 'Printer not found'
        });
      }

      const orders = await orderService.findByTableNumber(table_number);
      
      if(!orders) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      
      const orderItems = await orderItemService.findByOrderAndCategory(orders.id, category);
      const data_history = {
        printer_id: printers.id,
        order_id: orders.id,
      }

      await historyPrintService.createHistoryPrint(data_history);
      
      res.status(201).json({
        success: true,
        message: 'Print Kitchen successfully',
        data: {
          table_number: orders.table_number,
          items: orderItems,
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }

  async getBar(req, res) {
    try {
      const { table_number } = req.params;
      const category = 'Minuman';
      const tables = await tableNumberService.findByTableNumber(table_number);
      
      if(!tables) {
        return res.status(404).json({
          success: false,
          message: 'Table not found'
        });
      }

      const printers = await printerService.findByCategory('Minuman');
      
      if(!printers) {
        return res.status(404).json({
          success: false,
          message: 'Printer not found'
        });
      }

      const orders = await orderService.findByTableNumber(table_number);
      
      if(!orders) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      
      const orderItems = await orderItemService.findByOrderAndCategory(orders.id, category);
      const data_history = {
        printer_id: printers.id,
        order_id: orders.id,
      }

      await historyPrintService.createHistoryPrint(data_history);
      
      res.status(201).json({
        success: true,
        message: 'Print Bar successfully',
        data: {
          table_number: orders.table_number,
          items: orderItems,
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }

  async getPrint(req, res) {
    try {
      const { table_number, printer_id } = req.params;
      const tables = await tableNumberService.findByTableNumber(table_number);
      
      if(!tables) {
        return res.status(404).json({
          success: false,
          message: 'Table not found'
        });
      }

      const printers = await printerService.findById(printer_id);
      
      if(!printers) {
        return res.status(404).json({
          success: false,
          message: 'Printer not found'
        });
      }

      const orders = await orderService.findByTableNumber(table_number);
      
      if(!orders) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      
      const orderItems = await orderItemService.findByOrderAndCategory(orders.id, printers.category);
      const data_history = {
        printer_id: printer_id,
        order_id: orders.id,
      }

      await historyPrintService.createHistoryPrint(data_history);
      
      res.status(201).json({
        success: true,
        message: 'Print successfully',
        data: {
          table_number: orders.table_number,
          items: orderItems,
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }
}

module.exports = new OrderController();
