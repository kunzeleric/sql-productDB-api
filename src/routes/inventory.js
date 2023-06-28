const Inventory = require('../models/inventory');
const express = require('express');
const router = express.Router();

router.get('/inventory', async (req, res) => {
    const inventory = await Inventory.getAllInventory();
    
    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not found' });
    }
})

router.get('/inventory/:id', async (req, res) => {
    const id = req.params.id;
    const inventory = await Inventory.getInventory(id);

    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not found' });
    }
})

router.post('/inventory', async (req, res) => {
    const inventory = await Inventory.createInventory(req.body);

    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not created' });
    }
})

router.put('/inventory/:id', async (req, res) => {
    const id = req.params.id;
    const inventory = await Inventory.updateInventory(id, req.body);

    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not updated' });
    }
})

router.delete('/inventory/:id', async (req, res) => {
    const id = req.params.id;
    const inventory = await Inventory.deleteInventory(id);

    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not deleted' });
    }
})

router.get('/inventory/product/:id', async (req, res) => {
    const id = req.params.id;
    const inventory = await Inventory.getInventoryByProductID(id);

    if(inventory) {
        res.status(200).json({ inventory });
    } else {
        res.status(404).json({ msg: 'Inventory not  with this Product ID' });
    }
})

module.exports = router;