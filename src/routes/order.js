const Order = require('../models/order');
const express = require('express');
const router = express.Router();

router.get('/orders', async (req, res) => {
    const orders = await Order.getOrders();
    
    if(orders) {
        res.status(200).json({ orders });
    } else {
        res.status(404).json({ msg: 'Orders not found' });
    }
})

router.get('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.getOrder(id);

    if(order) {
        res.status(200).json({ order });
    } else {
        res.status(404).json({ msg: 'Order not found' });
    }
})

router.post('/orders', async (req, res) => {
    const order = await Order.createOrder(req.body);

    if(order) {
        res.status(200).json({ order });
    } else {
        res.status(404).json({ msg: 'Order not created' });
    }
})

router.put('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.updateOrder(id, req.body);

    if(order) {
        res.status(200).json({ order });
    } else {
        res.status(404).json({ msg: 'Order not updated' });
    }
})

router.delete('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.deleteOrder(id);

    if(order) {
        res.status(200).json({ order });
    } else {
        res.status(404).json({ msg: 'Order not deleted' });
    }
})

router.get('/orders/product/:id', async (req, res) => {
    const id = req.params.id;
    const orders = await Order.getOrderByProductID(id);

    if(orders) {
        res.status(200).json({ orders });
    } else {
        res.status(404).json({ msg: 'Orders could not be found with this Product ID' });
    }
})

router.get('/orders/sale/:id', async (req, res) => {
    const id = req.params.id;
    const orders = await Order.getOrderBySaleID(id);

    if(orders) {
        res.status(200).json({ orders });
    } else {
        res.status(404).json({ msg: 'Orders could not be found with this Sale ID' });
    }
})

module.exports = router;