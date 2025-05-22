const axios = require('axios');

const aggregator1 = async (req, res) => {
    try {
        const { ticker } = req.params;
        const minutes = parseInt(req.query.minutes, 10);
        const aggregation = req.query.aggregation;

        if (isNaN(minutes) || minutes <= 0 || aggregation !== 'average') {
            return res.status(400).json({ error: 'Invalid query parameters' });
        }

        const response = await axios.get(`http://20.244.56.144/evaluation-service/stocks/${ticker.toUpperCase()}`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODk0ODk4LCJpYXQiOjE3NDc4OTQ1OTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ2YzNhMzdiLTg4NjYtNGY1ZS05ODY4LTU4YzJlZDA0OGQ3NSIsInN1YiI6IjIyMDAwMzA5NjNjc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzA5NjNjc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJwYXRoaXB1dHRvb3IgaGFyc2hhdmFyZGFuYSByZWRkeSIsInJvbGxObyI6IjIyMDAwMzA5NjMiLCJhY2Nlc3NDb2RlIjoiYmVUSmpKIiwiY2xpZW50SUQiOiJkNmMzYTM3Yi04ODY2LTRmNWUtOTg2OC01OGMyZWQwNDhkNzUiLCJjbGllbnRTZWNyZXQiOiJxdGdKWUJLck5XZ0puWG1VIn0.SWpIuTyLeK8TZGLoqO8epbJKNs-r4vMpUe_VcZiIsYQ"
            }
        });

        const dataArray = Array.isArray(response.data) ? response.data : response.data.stocks || [];

        const now = new Date();
        const since = new Date(now.getTime() - minutes * 60 * 1000);

        const priceHistory = dataArray.filter(entry => {
            const date = new Date(entry.lastUpdatedAt);
            return (
                typeof entry.price === 'number' &&
                !isNaN(date) &&
                date >= since
            );
        });

        if (!priceHistory.length) {
            return res.json({ averageStockPrice: 0, priceHistory: [] });
        }

        const total = priceHistory.reduce((sum, entry) => sum + entry.price, 0);
        const average = total / priceHistory.length;

        const formattedHistory = priceHistory.map(entry => ({
            price: entry.price,
            lastUpdatedAt: entry.lastUpdatedAt
        }));

        res.json({
            averageStockPrice: average,
            priceHistory: formattedHistory
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { aggregator1 };
