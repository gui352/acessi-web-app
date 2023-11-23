import { readFile } from "fs/promises";
import { UserConfig } from "next-i18next";

import { isDev } from "utils/environment";

import { i18nCommonConfig } from "./common";

export const i18nServerConfig: UserConfig = {
  ...i18nCommonConfig,
  react: { useSuspense: false },
  reloadOnPrerender: isDev,
};

const defautlNamespaces = ["common", "layout"];
export async function getServerSideTranslations(
  language = "en-US",
  namespaces: string[] = []
) {
  const defaultLang = i18nServerConfig.i18n.defaultLocale;

  const allNamespaces = [...defautlNamespaces, ...namespaces];
  const allLanguages = [language, defaultLang];

  const translationsMap = new Map<string, Record<string, any>>();
  for (const lang of allLanguages) {
    if (translationsMap.has(lang)) {
      continue;
    }

    const langTranslationsMap = new Map<string, any>();
    for (const ns of allNamespaces) {
      if (langTranslationsMap.has(ns)) {
        continue;
      }

      const fileBuffer = await readFile(`./public/locales/${lang}/${ns}.json`);
      const translations = JSON.parse(fileBuffer.toString());

      langTranslationsMap.set(ns, translations);
    }

    translationsMap.set(lang, Object.fromEntries(langTranslationsMap));
  }

  const initialI18nStore = Object.fromEntries(translationsMap);

  return {
    _nextI18Next: {
      initialI18nStore,
      initialLocale: language ?? "en-US",
      ns: allNamespaces,
      userConfig: i18nServerConfig,
    },
  };
}
