import React from 'react'
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TimeSelector from '../components/TimeSelector';
import StockChart from '../components/StockChart';
import { fetchStockData } from '../services/api';

export default function StockePage() {
  return (
    const [timeRange, setTimeRange] = useState(15);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStockData(timeRange).then(setData);
  }, [timeRange]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Stock Price Chart</Typography>
      <TimeSelector timeRange={timeRange} setTimeRange={setTimeRange} />
      <StockChart data={data} />
    </Container>
  );
  )
}
