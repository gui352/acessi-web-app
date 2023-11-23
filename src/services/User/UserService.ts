import axios from "axios";
import { UserModel } from "interfaces/User/UserInterface";

export class UserService {
  private API = "http://localhost:8085/acessi";

  async CreateUser(user: UserModel) {
    console.log("Entrou service");
    console.log(user);
    console.log(`${this.API}/user`);

    const response = await axios.post(`${this.API}/user`, user);
    return response;
  }

  async LoginUser(user: UserModel) {
    return await axios.post(`${this.API}/login/auth`, user);
  }
}
