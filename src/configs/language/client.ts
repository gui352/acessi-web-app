import HttpApi from "i18next-http-backend";
import { UserConfig } from "next-i18next";

import { isBrowser } from "utils/environment";

import { i18nCommonConfig } from "./common";

export const i18nClientConfig: UserConfig = {
  ...i18nCommonConfig,
  use: isBrowser ? [HttpApi] : [],
  backend: isBrowser
    ? {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      }
    : undefined,
  react: { useSuspense: isBrowser },
};
