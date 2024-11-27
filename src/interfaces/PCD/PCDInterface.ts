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
  disabilityTypePCD: string;
  bpc: string;
  nit: string;
  sus: string;
  color: string;
  isEmployee: boolean;
  isUsePublicTransport: boolean;
  hasSons: boolean;
  neededAssistency: boolean;
  addressPCD: AddressModel;
  aboutDeficiency: {};
}
