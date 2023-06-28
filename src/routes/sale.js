const Sale = require('../models/sale');
const express = require('express');
const router = express.Router();

// get all sales
router.get('/sales', async (req, res) => {
    const sales = await Sale.getSales();
    
    if(sales) {
        res.status(200).json({ sales });
    } else {
        res.status(404).json({ msg: 'No sales found' });
    }
})

// create a sale
router.post('/sales', async (req, res) => {
    const sale = await Sale.createSale(req.body);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not created' });
    }
})

// update a specific sale
router.put('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.updateSale(id, req.body);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not updated' });
    }
})

// delete a specific sale
router.delete('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.deleteSale(id);

    if(sale) {
        res.status(200).json({ msg: `Sale ${id} deleted successfully` });
    } else {
        res.status(404).json({ msg: 'Sale not deleted' });
    }
})

// get sales from a client
router.get('/sales/client/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.getSaleByClientID(id);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not found with this Client ID' });
    }
})

// get sales summary
router.get('/sales/summary', async (req, res) => {
    const sales = await Sale.getSalesSummary();

    if(sales) {
        res.status(200).json({ sales });
    } else {
        res.status(404).json({ msg: 'No sales registered' });
    }
})

// get a specific sale
router.get('/sales/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await Sale.getSale(id);

    if(sale) {
        res.status(200).json({ sale });
    } else {
        res.status(404).json({ msg: 'Sale not found' });
    }
})

module.exports = router;