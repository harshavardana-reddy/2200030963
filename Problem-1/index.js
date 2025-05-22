const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const StockRoute = require('./routes/StockRoute');
app = express();
app.use(cors());
app.use(express.json());

app.use('/stock',StockRoute);

app.listen(5000,()=>[
    console.log("Server is running on port 5000")
]);
