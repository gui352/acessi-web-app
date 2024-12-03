import { InformationDeficiency } from "interfaces/InformationDeficiency";
import { AddressModel } from "../Adress/AddressInterface";

export interface PCDModel {
  namePCD: string;
  cpfPCD: string;
  birthDatePCD: Date;
  telephonePCD: string;
  emailPCD: string;
  genderPCD: string;
  educationLevelPCD: string;
  employee: boolean;
  publicTransportation: boolean;
  bpcNumber: string;
  nit: string;
  susNumber: string;
  color: string;
  hasSons: boolean;
  neededAssistency: boolean;
  addressPCD: AddressModel;
  informationDeficiency: InformationDeficiency;
  auxiliarPCD: {};
}
