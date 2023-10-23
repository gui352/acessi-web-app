import getConfig from "next/config";

const config = getConfig().serverRuntimeConfig;

export const APP_ENV: string = config.APP_ENV;
