import axios from "axios";
import { AvaliationLocalModel } from "interfaces/Avaliations/AvalitionLocalInterface";

export class AvaliationLocalService {
  private ApiUrl = "http://localhost:8085/acessi/";

  async GetAllAvaliations() {
    return await axios.get<AvaliationLocalModel[]>(`${this.ApiUrl}/avaliation`);
  }

  async CreateAvaliationLocal(avaliationLocal: AvaliationLocalModel) {
    return await axios.post(`${this.ApiUrl}/avaliation`, { avaliationLocal });
  }
}
