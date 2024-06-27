import { TFunction } from "next-i18next";
import { z } from "zod";

export function createTranslatedErrorMap(t: TFunction): z.ZodErrorMap {
  return (error) => {
    const fullPath = ["error", ...error.path, error.code];
    const messageKey = fullPath.join(".");
    const defaultKey = `error.${error.code}`;
    console.error("createTranslatedErrorMap", error);
    return { message: t(messageKey, t(defaultKey)) };
  };
}
