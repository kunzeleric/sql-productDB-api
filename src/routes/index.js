const client_routes = require('./client');
const product_routes = require('./product');
const inventory_routes = require('./inventory');
const order_routes = require('./order');
const sales_routes = require('./sale');
const express = require('express');

const routes = (app) => {
    app.use(
        express.json(),
        client_routes,
        product_routes,
        inventory_routes,
        order_routes,
        sales_routes,
    )
}

module.exports = routes;