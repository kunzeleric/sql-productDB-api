const Product = require('../models/product');
const express = require('express');
const router = express.Router();

// get all products
router.get('/products', async (req, res) => {
    const products = await Product.getProducts();
    
    if(products) {
        res.status(200).json({ products });
    } else {
        res.status(404).json({ msg: 'Products not found' });
    }
})

// get a specific product
router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.getProduct(id);

    if(product) {
        res.status(200).json({ product });
    } else {
        res.status(404).json({ msg: 'Product not found' });
    }
})

// post a product
router.post('/products', async (req, res) => {
    const product = await Product.createProduct(req.body);

    if(product) {
        res.status(200).json({ product });
    } else {
        res.status(404).json({ msg: 'Product not created' });
    }
})

// update a specific product
router.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.updateProduct(id, req.body);

    if(product) {
        res.status(200).json({ product });
    } else {
        res.status(404).json({ msg: 'Product not updated' });
    }
})

// delete a specific product
router.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.deleteProduct(id);

    if(product) {
        res.status(200).json({ msg: `Product ${id} deleted successfully` });
    } else {
        res.status(404).json({ msg: 'Product not deleted' });
    }
})

module.exports = router;