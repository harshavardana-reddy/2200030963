const mongoose = require('mongoose');

const StockPriceHistorySchema = new mongoose.Schema({
    ticker: { type: String, required: true },
    price: { type: Number, required: true },
    lastUpdatedAt: { type: Date, required: true }
});

module.exports = mongoose.model('StockPriceHistory', StockPriceHistorySchema);