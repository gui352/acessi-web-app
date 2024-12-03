import { UserModel } from "interfaces/User/UserInterface";
import { AvaliationInterface } from "./AvaliationInterface";

export interface AvaliationItemInterface {
  avaliationGivenByUser: string;
  avaliationRating: number;
  avaliationLocal: AvaliationInterface;
  user: UserModel;
  dateAvaliation: Date;
}
