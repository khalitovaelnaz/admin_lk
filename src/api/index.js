import axios from "axios";
import md5 from "md5";

const SID = 6;
const TOKEN = "dde720d86821b84443ee9e1ffce07887";
const PID = "1";

const loginConfig = {
  baseURL: `https://v4.jet-mix.ru/rest`,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
};
const defaultConfig = {
  baseURL: `https://v4.jet-mix.ru/rest`,
  headers: { "Content-Type": "application/json" },
};
export const parametrsApi = {
  sid: SID,
  token: TOKEN,
  pid: PID,
  hash: md5(PID + TOKEN),
};
export const loginApiInstance = axios.create(loginConfig);
export const defaultApiInstance = axios.create(defaultConfig);
