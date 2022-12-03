import { BASE_URL } from "@env";
import axios from "axios";
import jwt from "./jwt";

export const httpRequest = axios.create({
  baseURL:  "http://172.20.10.5:4000/",
});

export const configAxios = () => {
  httpRequest.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${jwt.getToken()}`;
};

export default httpRequest;
