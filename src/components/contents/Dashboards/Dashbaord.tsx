import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { HeaderTitle } from "components/HeaderTitle";

interface IRow {
  id: number;
  isUsePublicTransportation: boolean;
  age: number;
  gender: string;
  deficiency: {
    type: string;
    degree: string;
    description: string;
  };
  neighborhood: string;
  isEmployee: boolean;
  education: string;
}

export const DashboardPage = () => {
  const [rowData, setRowData] = useState<IRow[]>([
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
        description: "Deficiência Auditiva",
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
        description: "Deficiência Física",
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
        description: "Deficiência Intelectual",
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
        description: "Deficiência Múltipla",
      },
      neighborhood: "Bairro E",
      isEmployee: true,
      education: "Ensino Superior Completo",
    },
  ]);

  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "id", filter: true },
    { field: "age", filter: true },
    { field: "isUsePublicTransportation", filter: true },
    { field: "gender", filter: true },
    { field: "deficiency.type", filter: true },
    { field: "deficiency.degree", filter: true },
    { field: "deficiency.description", filter: true },
    { field: "neighborhood", filter: true },
    { field: "isEmployee", filter: true },
    { field: "education", filter: true },
  ]);

  return (
    <>
      <HeaderTitle titleBold={"Gráficos"} normalTitle={"e relatórios"} displayFilters={false} />
      <div
        className={"ag-theme-alpine"}
        style={{ width: "100%", height: "40%" }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div >
    </>
  );
};
