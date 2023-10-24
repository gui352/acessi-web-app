import axios from "axios";
import { UserModel } from "interfaces/User/UserInterface";

export class UserService {
  private API = "https://localhost:7272";

  async CreateUser(user: UserModel) {
    console.log("Entrou service");
    console.log(user);
    console.log(`${this.API}/register`);

    const response = await axios.post(`${this.API}/register`, user);
    return response.data;
  }
}
