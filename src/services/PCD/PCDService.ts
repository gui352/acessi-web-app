import axios from "axios";
import { PCDModel } from "interfaces/PCD/PCDInterface";

export class PCDService {
  private API = "http://localhost:8085/acessi/pcd";

  async CreateUser(pcd: PCDModel) {
    const response = await axios.post(`${this.API}`, pcd, {
      withCredentials: true,
    });
    return response;
  }

  async GetDisabilityTypeCount() {
    const response = await axios.get(`${this.API}/type`, {
      withCredentials: true,
    });
    return response;
  }

  async GetCount() {
    const response = await axios.get(`${this.API}/count`, {
      withCredentials: true,
    });
    return response;
  }

  async GetEducationLevelCount() {
    const response = await axios.get(`${this.API}/education`, {
      withCredentials: true,
    });
    return response;
  }

  async GetGenderCount() {
    const response = await axios.get(`${this.API}/gender`, {
      withCredentials: true,
    });
    return response;
  }

  async GetNeighborhoodCount() {
    const response = await axios.get(`${this.API}/neighborhood`, {
      withCredentials: true,
    });
    return response;
  }

  async GetPyramidCount() {
    const response = await axios.get(`${this.API}/pyramid`, {
      withCredentials: true,
    });
    return response;
  }
}
