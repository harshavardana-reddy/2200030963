const { Router } = require('express');
const StockController = require('../controllers/StockController');
const router = require('express').Router();

router.get('/:ticker',StockController.aggregator1);

module.exports = router;