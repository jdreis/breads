const express = require('express');
const router = express.Router()
const Bread = require('../models/bread')

router.get('/:id', (req, res) => {
    res.send(Bread[req.params.id])
})

module.exports = router