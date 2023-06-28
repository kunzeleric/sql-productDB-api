const Order = require('../models/order');
const express = require('express');
const router = express.Router();

// get all orders
router.get('/orders', async (req, res) => {
    const orders = await Order.getOrders();
    
    if(orders) {
        res.status(200).json({ data: orders });
    } else {
        res.status(404).json({ msg: 'Orders not found' });
    }
})

// creat an order
router.post('/orders', async (req, res) => {
    const order = await Order.createOrder(req.body);

    if(order) {
        res.status(200).json({ data: order });
    } else {
        res.status(404).json({ msg: 'Order not created' });
    }
})

// update a specific order
router.put('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.updateOrder(id, req.body);

    if(order) {
        res.status(200).json({ data: order });
    } else {
        res.status(404).json({ msg: 'Order not updated' });
    }
})

// delete a specific order
router.delete('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.deleteOrder(id);

    if(order) {
        res.status(200).json({ data: order });
    } else {
        res.status(404).json({ msg: 'Order not deleted' });
    }
})

// get orders from a product id
router.get('/orders/product/:id', async (req, res) => {
    const id = req.params.id;
    const orders = await Order.getOrderByProductID(id);

    if(orders) {
        res.status(200).json({ data: orders });
    } else {
        res.status(404).json({ msg: 'Orders could not be found with this Product ID' });
    }
})

// get orders from a sale id
router.get('/orders/sale/:id', async (req, res) => {
    const id = req.params.id;
    const orders = await Order.getOrderBySaleID(id);

    if(orders) {
        res.status(200).json({ data: orders });
    } else {
        res.status(404).json({ msg: 'Orders could not be found with this Sale ID' });
    }
})

// get summary of a specific order
router.get('/orders/summary/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.getOneOrderSummary(id);

    if (order) {
        res.status(200).json({ data: order });
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

// get summary of all orders
router.get('/orders/summaries', async (req, res) => {
    const orders = await Order.getAllOrdersSummary();
    console.log(orders);
    if (orders) {
        res.status(200).json({ data: orders });
    } else {
        res.status(404).json({ message: 'Orders not found' });
    }
});

// get a specific order
router.get('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.getOrder(id);

    if(order) {
        res.status(200).json({ data: order });
    } else {
        res.status(404).json({ msg: 'Order not found' });
    }
})






module.exports = router;