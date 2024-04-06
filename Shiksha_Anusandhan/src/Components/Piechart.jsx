import React from 'react';
import { Pie } from 'react-chartjs-2';

const Piechart = ({ data }) => {
  // Sample data for the pie chart
  const chartData = {
    labels: ['Math', 'Science', 'History', 'English', 'Art'],
    datasets: [{
      data: data, // Pass the student's data here
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ]
    }]
  };

  return (
    <div>
      <h2>Student Performance</h2>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default Piechart;
