import React from 'react';
import { AgChartsReact } from 'ag-charts-react';

export const AgChart = ({ data }) => {
  const chartData = data.map(item => ({
    type: item.deficiency.type,
    count: 1,
  })).reduce((acc, curr) => {
    const found = acc.find(item => item.type === curr.type);
    if (found) {
      found.count += 1;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  const typeColors = {
    Visual: '#4BC0C0',
    Auditiva: '#36A2EB',
    Física: '#FFCE56',
    Intelectual: '#4BC0C0',
    Múltipla: '#9966FF',
  };

  const options = {
    data: chartData,
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'count',
        // fill: ({ data }) => typeColors[data.deficiency.type] || '#CCCCCC',
        label: {
          enabled: true,
        },
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: {
          text: 'Tipo de Deficiência',
        },
      },
      {
        type: 'number',
        position: 'left',
        title: {
          text: 'Contagem',
        },
      },
    ],
    legend: {
      enabled: true,
    },
  };

  return <div style={{ height: 300, marginTop: 30 }}><AgChartsReact options={options} /></div>;
};
