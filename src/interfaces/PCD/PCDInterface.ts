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
  addressPCD: AddressModel;
}

export interface DisabilityTypeCount {
  disabilityTypeCount: number;
  disabilityTypeName: string;
}
