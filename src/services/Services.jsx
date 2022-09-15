import axios from "axios";

const baseURL = "http://localhost:7000/api";
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyIiwiZ2VuZGVyIjoibWFsZSIsImZpcnN0bmFtZSI6IkFkbWluIiwibGFzdG5hbWUiOiIiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDMxLlQubG04Umt0SEVlYVU4OXNoRC5Ud0xpMFZDSDl0N1Z3MlA0ZHE0ZVowdlFpQktaMlp5IiwicGhvbmUiOiIwNy0zOS04MS0xOC0yNyIsImJpcnRoZGF0ZSI6IjE5ODgtMTEtMDQiLCJjaXR5IjoiUGFyaXMiLCJjb3VudHJ5IjoiRnJhbmNlIiwicGhvdG8iOiJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNDIuanBnIiwic2VydmljZSI6IkNsaWVudCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0MjY5MX0.Uv1XwyhjujyV_eCTAWI1pFd-zClKmB8916pxwg-5L3A");

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Récupérer le token du localstorage (s'il existe)
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//recuperer la liste des collaborateurs
export const getCollabs = async () => {
  const getData = await axios.get(`${baseURL}/collaborateurs`).then((res) => {
    // console.log("res", res);
    return res.data;
  });
  return getData;
};

export const login = async (email, password) => {
  const getData = await axios
    .post(`${baseURL}/login`, { email, password })
    .then((res) => {
      // stocker le token dans le navigateur
      localStorage.setItem("token", res.data.token);
      return res.data;
    });
  return getData;
};

//recuperer un collaborateur au hasard
export const getCollabRandom = async () => {
  const getData = await axios
    .get(`${baseURL}/collaborateurs/random`)
    .then((res) => {
      // console.log("res", res);
      return res.data;
    });
  return getData;
};
