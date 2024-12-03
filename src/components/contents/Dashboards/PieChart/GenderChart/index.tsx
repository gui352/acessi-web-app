import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PCDService } from 'services/PCD/PCDService';

export default function GenderChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  let labels: string[] = [];
  let numbers: number[] = [];

  useEffect(() => {
    new PCDService().GetGenderCount().then((res) => {
      labels = res.data.map(item => item.genderName);
      numbers = res.data.map(item => item.genderCount);
      const documentStyle = getComputedStyle(document.documentElement);

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Pessoas com deficiência',
            data: numbers,
            borderWidth: 1,
            backgroundColor: [
              'rgb(50, 79, 130)',
              documentStyle.getPropertyValue('--pink-500'),
              'rgb(169 169 169)',
              'rgb(0 0 0 / 78%)'
            ],
          }
        ]
      };
      const options = {
      };

      setChartData(data);
      setChartOptions(options);
    });
  }, []);

  return (
    <div className="card">
      <Chart type="pie" data={chartData} options={chartOptions} />
    </div>
  )
}
