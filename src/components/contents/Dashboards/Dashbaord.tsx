import React, { useState } from 'react';
import { AGGridTable } from './AGGridTable/index';
import { AgChart } from './AGCharts/index';
import { Button } from 'primereact/button';

export const DashboardsPage = () => {
  const initialData = [
    {
      id: 1,
      isUsePublicTransportation: true,
      age: 30,
      gender: "Masculino",
      deficiency: {
        type: "Visual",
        degree: "Leve",
        description: "Baixa Visão",
      },
      neighborhood: "Bairro A",
      isEmployee: true,
      education: "Ensino Médio Completo",
    },
    {
      id: 2,
      isUsePublicTransportation: false,
      age: 25,
      gender: "Feminino",
      deficiency: {
        type: "Auditiva",
        degree: "Moderado",
        description: "Auditiva",
      },
      neighborhood: "Bairro B",
      isEmployee: false,
      education: "Ensino Superior Incompleto",
    },
    {
      id: 3,
      isUsePublicTransportation: true,
      age: 35,
      gender: "Não informado",
      deficiency: {
        type: "Física",
        degree: "Severo",
        description: "Física",
      },
      neighborhood: "Bairro C",
      isEmployee: true,
      education: "Ensino Fundamental Completo",
    },
    {
      id: 4,
      isUsePublicTransportation: true,
      age: 28,
      gender: "Masculino",
      deficiency: {
        type: "Intelectual",
        degree: "Leve",
        description: "Intelectual",
      },
      neighborhood: "Bairro D",
      isEmployee: false,
      education: "Ensino Médio Incompleto",
    },
    {
      id: 5,
      isUsePublicTransportation: false,
      age: 32,
      gender: "Feminino",
      deficiency: {
        type: "Múltipla",
        degree: "Moderado",
        description: "Múltipla",
      },
      neighborhood: "Bairro E",
      isEmployee: true,
      education: "Ensino Superior Completo",
    },
  ];

  const [selectedData, setSelectedData] = useState(initialData);

  const handleRowSelected = (data) => {
    setSelectedData(data.length > 0 ? data : initialData);
  };

  const handleResetSelection = () => {
    setSelectedData(initialData);
  };

  return (
    <div>
      <AGGridTable onRowSelected={handleRowSelected} />
      <Button style={{ marginTop: 20 }} icon="pi pi-refresh" rounded text raised severity="secondary" onClick={handleResetSelection}></Button>
      <AgChart data={selectedData} />
    </div>
  );
};
