const Client = require('../models/client');
const express = require('express');
const router = express.Router();

router.get('/clients', async (req, res) => {
    const clients = await Client.getClients();
    
    if(clients) {
        res.status(200).json({ clients });
    } else {
        res.status(404).json({ msg: 'Clients not found' });
    }
})

router.get('/clients/:id', async (req, res) => {
    const id = req.params.id;
    const client = await Client.getClient(id);

    if(client) {
        res.status(200).json({ client });
    } else {
        res.status(404).json({ msg: 'Client not found' });
    }
})

router.post('/clients', async (req, res) => {
    const client = await Client.createClient(req.body);

    if(client) {
        res.status(200).json({ client });
    } else {
        res.status(404).json({ msg: 'Client not created' });
    }
})

router.put('/clients/:id', async (req, res) => {
    const id = req.params.id;
    const client = await Client.updateClient(id, req.body);

    if(client) {
        res.status(200).json({ client });
    } else {
        res.status(404).json({ msg: 'Client not updated' });
    }
})

router.delete('/clients/:id', async (req, res) => {
    const id = req.params.id;
    const client = await Client.deleteClient(id);

    if(client) {
        res.status(200).json({ client });
    } else {
        res.status(404).json({ msg: 'Client not deleted' });
    }
})

module.exports = router;