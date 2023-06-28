const Sale = require('../models/sale');
const express = require('express');
const router = express.Router();

router.get('/sales', async (req, res) => {
    const sales = await Sale.getSales();
    
    if(sales) {
        res.status(200).json({ sales });
    } else {
        res.status(404).json({ msg: 'No sales found' });
    }
})

router.get('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.get(id);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not found' });
    }
})

router.post('/sales', async (req, res) => {
    const sale = await Sale.createSale(req.body);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not created' });
    }
})

router.put('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.updateSale(id, req.body);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not updated' });
    }
})

router.delete('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.deleteSale(id);

    if(sale) {
        res.status(200).json({ msg: `Sale ${id} deleted successfully` });
    } else {
        res.status(404).json({ msg: 'Sale not deleted' });
    }
})

router.get('/sales/client/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.getSaleByClientID(id);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not found with this Client ID' });
    }
})

module.exports = router;