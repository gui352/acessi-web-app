export enum LocalAvaliationType {
  Restaurant = "Restaurant",
  Pub = "Pub",
  Park = "Park",
  Public = "Public",
  Private = "Private",
  Another = "Another"
}

export interface AvaliationLocalModel {
  idLocalAvaliation: number | null;
  name: string;
  imageAvaliationLocal: number[] | Uint8Array;
  typeLocalAvaliation: LocalAvaliationType;
}
