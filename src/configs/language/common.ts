import config from "../../../next.config";

import { UserConfig } from "next-i18next";

export type I18nFormatFunction = (value: any, language: string) => string;

export const i18nCommonConfig: UserConfig = {
  i18n: config.i18n,
  serializeConfig: false,
  load: "currentOnly",
  cleanCode: true,
  partialBundledLanguages: true,
};
