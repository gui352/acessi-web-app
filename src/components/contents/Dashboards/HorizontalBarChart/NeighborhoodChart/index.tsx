import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PCDService } from 'services/PCD/PCDService';

export default function NeighborhoodChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  let labels: string[] = [];
  let numbers: number[] = [];

  useEffect(() => {
    new PCDService().GetNeighborhoodCount().then((res) => {
      labels = res.data.map(item => item.neighborhoodName);
      numbers = res.data.map(item => item.neighborhoodCount);

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Pessoas com deficiência',
            data: numbers,
            backgroundColor: 'rgb(50, 79, 130)',
            borderColor: 'rgb(60, 79, 130)',
            borderWidth: 1
          }
        ]
      };
      const options = {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      setChartData(data);
      setChartOptions(options);
    });
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  )
}
