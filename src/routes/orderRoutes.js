const express = require('express');
const router = express.Router();

const {
    createOrder,
    getBill,
    getKitchen,
    getBar,
    getPrint,
} = require('../controllers/orderController');

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               table_number:
 *                 type: integer
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product_id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     table_number:
 *                       type: integer
 *                     total_price:
 *                       type: integer
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           product_id:
 *                             type: integer
 *                           quantity:
 *                             type: integer
 *                           order_id:
 *                             type: integer
 *                           product:
 *                             type: string
 *                           category:
 *                             type: string
 *                           variant:
 *                             type: string
 *                           price:
 *                             type: integer
 *                           sub_total:
 *                             type: integer
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.route('/').post(createOrder);
/**
 * @swagger
 * /api/order/getBill/{table_number}:
 *   get:
 *     summary: Retrieve a bill by table number
 *     parameters:
 *       - in: path
 *         name: table_number
 *         required: true
 *         description: Bill table number
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Bill details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     table_number:
 *                       type: integer
 *                     total_price:
 *                       type: integer
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           order_id:
 *                             type: integer
 *                           product:
 *                             type: string
 *                           category:
 *                             type: string
 *                           variant:
 *                             type: string
 *                           quantity:
 *                             type: string
 *                           price:
 *                             type: integer
 *                           sub_total:
 *                             type: integer
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.route('/getBill/:table_number').get(getBill);
/**
 * @swagger
 * /api/order/getKitchen/{table_number}:
 *   get:
 *     summary: Retrieve a kitchen by table number
 *     parameters:
 *       - in: path
 *         name: table_number
 *         required: true
 *         description: Order table number
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     table_number:
 *                       type: integer
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           order_id:
 *                             type: integer
 *                           product:
 *                             type: string
 *                           category:
 *                             type: string
 *                           variant:
 *                             type: string
 *                           quantity:
 *                             type: string
 *                           price:
 *                             type: integer
 *                           sub_total:
 *                             type: integer
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.route('/getKitchen/:table_number').get(getKitchen);
/**
 * @swagger
 * /api/order/getBar/{table_number}:
 *   get:
 *     summary: Retrieve a bar by table number
 *     parameters:
 *       - in: path
 *         name: table_number
 *         required: true
 *         description: Order table number
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     table_number:
 *                       type: integer
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           order_id:
 *                             type: integer
 *                           product:
 *                             type: string
 *                           category:
 *                             type: string
 *                           variant:
 *                             type: string
 *                           quantity:
 *                             type: string
 *                           price:
 *                             type: integer
 *                           sub_total:
 *                             type: integer
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.route('/getBar/:table_number').get(getBar);
/**
 * @swagger
 * /api/order/getPrint/{table_number}/{printer_id}:
 *   get:
 *     summary: Print by table number and printer
 *     parameters:
 *       - in: path
 *         name: table_number
 *         required: true
 *         description: Table number
 *         schema:
 *           type: integer
 *       - in: path
 *         name: printer_id
 *         required: true
 *         description: Printer ID
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     table_number:
 *                       type: integer
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           order_id:
 *                             type: integer
 *                           product:
 *                             type: string
 *                           category:
 *                             type: string
 *                           variant:
 *                             type: string
 *                           quantity:
 *                             type: string
 *                           price:
 *                             type: integer
 *                           sub_total:
 *                             type: integer
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.route('/getPrint/:table_number/:printer_id').get(getPrint);

module.exports = router;
