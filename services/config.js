const axios = require("axios");

axios.defaults.headers.post["Content-Type"] = "application/json";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
});

module.exports = api;
