import { ComponentType } from "react";

declare module "react" {
  export type AnyProps = Record<string, unknown>;
  export type CT<P = AnyProps> = ComponentType<P>;
  export type HOC<IP = AnyProps> = <P extends IP>(Component: CT<P>) => CT<P>;
}
