import axios, { AxiosResponse, AxiosError } from "axios";
import { AvaliationInterface } from "interfaces/Avaliations/AvaliationInterface";
import { AvaliationItemInterface } from "interfaces/Avaliations/AvaliationItemInterface";

export class AvaliationService {
  private API = `http://localhost:8085/acessi/avaliation`;

  async CreateAvaliation(avaliation: AvaliationInterface) {
    try {
      const response = await axios.post(
        `${this.API}/create-avaliation`,
        avaliation
      );
      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async CreateAvaliationItem(avaliationItem: AvaliationItemInterface) {
    try {
      const response = await axios.post(
        `${this.API}/register-avaliation-item`,
        avaliationItem
      );
      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async GetAvaliations(descriptionAvaliation: string) {
    try {
      const response = await axios.get(
        `${this.API}/search-avaliation?name=${descriptionAvaliation}`
      );
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async GetAllAvaliations(): Promise<AvaliationInterface[]> {
    try {
      const response = await axios.get<AvaliationInterface[]>(
        `${this.API}/search-all-avaliation`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
      return [];
    }
  }

  async GetAvaliationComments(
    idAvaliation: Number
  ): Promise<AvaliationItemInterface[]> {
    try {
      const response = await axios.get<AvaliationItemInterface[]>(
        `${this.API}/get-avaliation-itens`,
        {
          params: {
            idAvaliation,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
      return [];
    }
  }

  async AvaliateLocal(avaliation: AvaliationInterface) {
    try {
      const response = await axios.post(`${this.API}/avaliate`, avaliation);
      return response.status;
    } catch (error) {
      return this.handleError(error);
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
