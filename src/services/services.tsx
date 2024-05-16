import axios from "axios";

const url = 'https://cms.dev.hub.directvgo.com/o/'

export const api = axios.create({
  withCredentials: false,
  baseURL: url,
});
api.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem("lifeary-token");
  const convertToTokenObj = token && JSON.parse(token);
 
  config.headers.Authorization =
    `Bearer ${convertToTokenObj.access_token}` || "";
  return config;
});

export function fetcher<Type>(url: string) {
  return api.get<Type>(url).then((res) => res.data);
}