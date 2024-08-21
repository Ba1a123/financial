import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement);

const ChartComponent = ({ data, chartType }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Transaction Data',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {chartType === 'bar' && <Bar data={chartData} />}
      {chartType === 'line' && <Line data={chartData} />}
      {chartType === 'pie' && <Pie data={chartData} />}
    </div>
  );
};

export default ChartComponent;
