import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import TimeSelector from '../components/TimeSelector';
import Heatmap from '../components/Heatmap';
import { fetchCorrelationMatrix } from '../services/api';

export default function HeatMap() {
  return (
    const [timeRange, setTimeRange] = useState(15);
  const [correlationData, setCorrelationData] = useState([]);

  useEffect(() => {
    fetchCorrelationMatrix(timeRange).then(setCorrelationData);
  }, [timeRange]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Correlation Heatmap</Typography>
      <TimeSelector timeRange={timeRange} setTimeRange={setTimeRange} />
      <Heatmap data={correlationData} />
    </Container>
  );
  )
}
