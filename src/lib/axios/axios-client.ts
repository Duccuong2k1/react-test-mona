"use client";

import axios from "axios";
const URI = "https://api-erp.monamedia.net";

const axiosClient = axios.create({
  baseURL:URI,
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
