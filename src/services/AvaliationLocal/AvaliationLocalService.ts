import { ConsoleSqlOutlined } from "@ant-design/icons";
import axios from "axios";
import { AvaliationLocalModel } from "interfaces/Avaliations/AvalitionLocalInterface";

export class AvaliationLocalService {
  private ApiUrl = "http://localhost:8085/acessi";

  async GetAllAvaliations() {
    return await axios.get<AvaliationLocalModel[]>(`${this.ApiUrl}/avaliation`);
  }

  async CreateAvaliationLocal(avaliationLocal: AvaliationLocalModel) {
    console.log("chegou objeto", avaliationLocal);
    return await axios.post(`${this.ApiUrl}/avaliation`, avaliationLocal);
  }

  async UpdateAvaliationLocal(avaliationLocal: AvaliationLocalModel) {
    return await axios.put(
      `${this.ApiUrl}/avaliation/${avaliationLocal.idLocalAvaliation}`
    );
  }

  async DeleteAvaliationLocal(id: number) {
    return await axios.delete(`${this.ApiUrl}/avaliation/${id}`);
  }
}
