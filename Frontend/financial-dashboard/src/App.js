import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartComponent from './Components/chartcomponent';
import Filters from './Components/filters';
import './Components/Styles/App.css'
function App() {
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async (filters) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/transactions', { params: filters });
      setTransactions(response.data);
      processChartData(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
    setLoading(false);
  };

  const processChartData = (data) => {
    const labels = [];
    const values = [];

    // Process data for chart visualization
    data.forEach(item => {
      const categoryIndex = labels.indexOf(item.category || 'Unknown');
      if (categoryIndex === -1) {
        labels.push(item.category || 'Unknown');
        values.push(item.amount || 0);
      } else {
        values[categoryIndex] += item.amount || 0;
      }
    });

    setChartData({ labels, values });
  };

  return (
    <div className="App">
      <h1>Financial Transactions Dashboard</h1>
      <Filters onApplyFilters={fetchTransactions} />
      {loading ? <p>Loading...</p> : <ChartComponent data={chartData} chartType="bar" />}
    </div>
  );
}

export default App;
