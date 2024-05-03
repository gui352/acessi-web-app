import { ConsoleSqlOutlined } from "@ant-design/icons";
import axios from "axios";
import { AvaliationLocalModel } from "interfaces/Avaliations/AvalitionLocalInterface";

export class AvaliationLocalService {
  private ApiUrl = "http://localhost:8085/acessi";

  async GetAllAvaliations() {
    return await axios.get<AvaliationLocalModel[]>(`${this.ApiUrl}/avaliation`);
  }

  CreateAvaliationLocal(avaliationLocal: AvaliationLocalModel) {
    const createAvaliation = () => {
      return axios
        .post(`${this.ApiUrl}/avaliation`, avaliationLocal)
        .then((response) => response.data as AvaliationLocalModel);
    };

    return createAvaliation();
  }

  async UpdateAvaliationLocal(avaliationLocal: AvaliationLocalModel) {
    console.log("chegou objeto", avaliationLocal);
    console.log(
      "rota",
      `${this.ApiUrl}/avaliation/${avaliationLocal.idLocalAvaliation}`
    );
    return await axios.post(`${this.ApiUrl}/avaliation`, avaliationLocal);
  }

  async DeleteAvaliationLocal(id: number) {
    console.log("chegou id", id);
    console.log("rota", `${this.ApiUrl}/avaliation/${id}`);
    return await axios.delete(`${this.ApiUrl}/avaliation/${id}`);
  }
}
