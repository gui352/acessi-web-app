import axios from "axios";
import { CompanyModel } from "interfaces/Company/CompanyInterface";

export class CompanyService {
  private API = "http://localhost:8085/acessi";

  async CreateCompany(company: CompanyModel) {
    console.log("Entrou service");
    console.log(company);
    console.log(`${this.API}/company`);

    const response = await axios.post(`${this.API}/company`, company, {
      withCredentials: true,
    });
    return response;
  }
}
