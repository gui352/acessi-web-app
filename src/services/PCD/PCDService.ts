import axios from "axios";
import { PCDModel } from "interfaces/PCD/PCDInterface";

export class PCDService {
  private API = "http://localhost:8085/acessi";

  async CreateUser(pcd: PCDModel) {
    console.log("Entrou service");
    console.log(pcd);
    console.log(`${this.API}/pcd`);

    const response = await axios.post(`${this.API}/pcd`, pcd);
    return response;
  }

}
