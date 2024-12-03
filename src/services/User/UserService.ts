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
    const response = await axios.post(`${this.API}/login/auth`, user, {
      withCredentials: true,
    });
    this.RegisterLogin(response);
    return response;
  }
  async SendEmailValidationToken(email: string) {
    const response = await axios.post(
      `${this.API}/reset-password/send-email-reset-password`,
      null,
      {
        params: {
          email: email,
        },
      }
    );
    return response.data;
  }

  async ValidateToken(token: string, email: string) {
    const response = await axios.post(
      `${this.API}/reset-password/validate-token-reset-password`,
      null,
      {
        params: {
          token: token,
          email: email,
        },
      }
    );
    return response.data;
  }

  async ChangePassword(senha: string, email: string) {
    const response = await axios.post(
      `${this.API}/reset-password/change-password`,
      null,
      {
        params: {
          password: senha,
          email: email,
        },
      }
    );
    return response.data;
  }

  async RegisterLogin(response: any) {
    if (response.status == 200 && response.data.idUser) {
      const user: UserModel = response.data;
      localStorage.setItem("loggedUser", JSON.stringify(user));
    } else {
      localStorage.setItem("loggedUser", "deuBode");
    }
  }

  handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      return error.response ? error.response.status : 403;
    } else {
      return 403;
    }
  };
}
