import axios from "axios";

const examApi = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

examApi.interceptors.request.use(request => {
  return request
})

examApi.interceptors.response.use(response => {
  return response
})

export default examApi;