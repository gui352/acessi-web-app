import React, { useState } from 'react';
import { Card } from 'antd';
import { HeaderTitle } from 'components/HeaderTitle';
import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';

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
      <HeaderTitle titleBold={"Gráficos"} normalTitle={"e relatórios"} displayFilters={false} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: "49%", height: "100%" }}>
          <Card title="Distribuição de PCDs por Tipo" style={{ width: "100%", height: "60%", marginBottom: "2vh" }}>
            <BarChart />
          </Card>
          <Card title="Crescimento de PCDs registrados" style={{ width: "100%", height: "40%" }}>
            <LineChart />
          </Card>
        </div>
        <Card title="Distribuição de PCDs por Gênero e idade" style={{ width: "49%", height: "100%" }}>
          <HorizontalBarChart />
        </Card>
      </div>
    </div>
  );
};
