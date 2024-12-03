import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PCDService } from 'services/PCD/PCDService';
import plugin from 'chartjs-plugin-datalabels';

function compareAgeRanges(a: string, b: string): number {
  // Função para extrair os limites inferior e superior de uma faixa etária
  const extractLimits = (range: string) => {
    const [start, end] = range.split('-');
    return {
      start: parseInt(start),
      end: end === '+' ? Infinity : parseInt(end),
    };
  };

  const { start: startA, end: endA } = extractLimits(a);
  const { start: startB, end: endB } = extractLimits(b);

  // Comparar os limites inferiores primeiro
  if (startA < startB) return -1;
  if (startA > startB) return 1;

  // Se os limites inferiores forem iguais, comparar os superiores
  return endA - endB;
}

function removeDuplicatedAgeRanges(ageRanges: string[]): string[] {
  return ageRanges.reduce((uniqueRanges, currentRange) => {
    if (!uniqueRanges.includes(currentRange)) {
      uniqueRanges.push(currentRange);
    }
    return uniqueRanges;
  }, [] as string[]);
}

export default function PyramidChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    let labels: string[] = [];
    let males = [];
    let famales = [];

    new PCDService().GetPyramidCount().then((res) => {
      labels = removeDuplicatedAgeRanges(res.data.map(item => item.ageRange).slice().sort(compareAgeRanges)).reverse();
      let maleList = res.data.filter(item => item.genderPCD == "Masculino");
      let femaleList = res.data.filter(item => item.genderPCD == "Feminino");
      labels.forEach(label => {
        males.push(maleList.find(item => item.ageRange == label)?.ageRangeCount);
        famales.push(femaleList.find(item => item.ageRange == label)?.ageRangeCount * -1);
      });

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Feminino',
            backgroundColor: documentStyle.getPropertyValue('--pink-500'),
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            data: famales
          },
          {
            label: 'Masculino',
            backgroundColor: 'rgb(50, 79, 130)',
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: males
          }
        ]
      };

      const tooltip = {
        yAlign: 'bottom',
        titleAlign: 'center',
        callbacks: {
          label: function (context) {
            return `${context.dataset.label} ${Math.abs(context.raw)}`;
          }
        }
      };

      const options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          },
          tooltip: tooltip,
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              },
              callback: function (value) {
                return Math.abs(value);
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            stacked: true
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            },
            stacked: true
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    });
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
