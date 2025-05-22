const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const StockRoute = require('./routes/StockRoute');
app = express();
app.use(cors());
app.use(express.json());

app.use('/stock',StockRoute);

mongoose.connect('mongodb://localhost:27017/stock')
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log("MongoDB connection error: "+ err.message);
})

app.listen(5000,()=>[
    console.log("Server is running on port 5000")
]);
