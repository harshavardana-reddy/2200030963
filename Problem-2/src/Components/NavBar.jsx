import React from 'react'
import { Routes } from 'react-router-dom'
import StockePage from './StockePage'
import HeatMap from './HeatMap'

export default function NavBar() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<StockePage/>} />
            <Route path="/heatmap" element={<HeatMap/>} />
            <Route path="/stock" element={<StockePage/>} />
        </Routes>
    </div>
  )
}
