import { APP_ENV } from "./serverConstants";

export const isServer = typeof window === "undefined";
export const isBrowser = !isServer;

export const isPrd = APP_ENV === "prd";
export const isQA = APP_ENV === "qa";
export const isDev = APP_ENV === "dev";
