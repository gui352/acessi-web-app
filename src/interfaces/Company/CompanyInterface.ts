import { UserModel } from "interfaces/User/UserInterface";

export interface CompanyModel {
  cnpjCompany: string;
  companyName: string;
  site?: string;
  areaActivity?: string;
  telephoneCompany: string;
  emailCompany: string;
  userCompany: UserModel;
}
