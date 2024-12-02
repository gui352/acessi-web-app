import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { HeaderTitle } from 'components/HeaderTitle';
import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart/PyramidChart';
import LineChart from './LineChart';
import { PCDService } from 'services/PCD/PCDService';
import EducationChart from './PieChart/EducationChart';
import GenderChart from './PieChart/GenderChart';
import NeighborhoodChart from './HorizontalBarChart/NeighborhoodChart';

export const DashboardsPage = () => {
  let [PCDcount, setPCDCount] = useState<number>(0);
  useEffect(() => {
    new PCDService().GetCount().then((response) => {
      setPCDCount(response.data);
    });
  });

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <HeaderTitle titleBold={"Gráficos"} normalTitle={"e relatórios"} displayFilters={false} />
      <Card style={{ marginBottom: "2vh" }} bodyStyle={{ padding: '10px' }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="pi pi-users" style={{ fontSize: "2rem", color: "#3C4F82", marginLeft: "10px" }}></i>
          <h3 style={{ color: "#3C4F82", marginLeft: "10px", fontSize: "1.2rem" }}> Registros de PCDs: </h3>
          <h3 style={{ marginLeft: "10px", fontSize: "1.2rem" }}> {PCDcount} </h3>
          <h3 style={{ marginTop: "18px", marginLeft: "5px", fontSize: "0.8rem" }}> pessoas </h3>
          <div style={{ display: "flex", justifyContent: "end", flex: "1" }}>
            <Card bodyStyle={{ padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#3C4F82", margin: "0px 10px 0px 0px", fontSize: "1.2rem" }}> Local: </h3>
                <h3 style={{ margin: 0 }}> Jaraguá do Sul - SC </h3>
              </div>
            </Card>
          </div>
        </div>
      </Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "49%", height: "100%" }}>
          <Card title="Distribuição de PCDs por Tipo" style={{ width: "100%", height: "60%", marginBottom: "2vh" }}>
            <BarChart />
          </Card>
          <Card title="Pirâmide Etária" style={{ width: "100%", height: "40%" }}>
            <HorizontalBarChart />
          </Card>
        </div>

        <div style={{ width: "49%", height: "100%" }}>
          {/* <Card title="Crescimento de PCDs registrados" style={{ width: "100%", height: "60%", marginBottom: "2vh" }}>
            <LineChart />
          </Card> */}
          <Card title="Gênero" style={{ width: "100%", marginBottom: "2vh" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "60%" }}>
                <GenderChart />
              </div>
            </div>
          </Card>
          <Card title="Escolaridade" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "80%" }}>
                <EducationChart />
              </div>
            </div>
          </Card>
        </div>

      </div>
      <div>
        <Card title="Registros de PCDs" style={{ width: "100%", margin: "2vh 0" }}>
          <NeighborhoodChart />
        </Card>
      </div>
    </div>
  );
};
