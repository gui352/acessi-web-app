import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BarChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ['Visual', 'Auditiva', 'Física', 'Intelectual', 'Múltipla'],
      datasets: [
        {
          label: 'Pessoas com deficiência',
          data: [50, 25, 30, 40, 55], // Exemplo de contagens para cada tipo de deficiência
          backgroundColor: [
            'rgb(50, 79, 130)',
            'rgb(50, 79, 130)',
            'rgb(50, 79, 130)',
            'rgb(50, 79, 130)',
            'rgb(50, 79, 130)'
          ],
          borderColor: [
            'rgb(60, 79, 130)',
            'rgb(60, 79, 130)',
            'rgb(60, 79, 130)',
            'rgb(60, 79, 130)',
            'rgb(60, 79, 130)'
          ],
          borderWidth: 1
        }
      ]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  )
}
