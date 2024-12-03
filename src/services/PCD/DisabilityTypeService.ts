import axios from "axios";

export class DisabilityTypeService {
  private API = "http://localhost:8085/acessi";

  async GetType() {

    const response = await axios.get(`${this.API}/disability-type`, {
      withCredentials: true,
    });

    return response;
  }
}
