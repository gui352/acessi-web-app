import axios from "axios";

export class DisabilityTypeService {
  private API = "http://localhost:8085/acessi";

  async GetType() {
    console.log("Entrou service");
    console.log(`${this.API}/disability-type`);

    const response = await axios.get(`${this.API}/disability-type`);

    return response;
  }

}
