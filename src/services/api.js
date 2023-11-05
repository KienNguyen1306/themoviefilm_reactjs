import axios from "axios";

const API = {
  call: function () {
    return axios.create({
      baseURL: "https://api.themoviedb.org/3/",
    });
  },
  callWithToken: function () {
    return axios.create({
      baseURL: "https://api.themoviedb.org/3/",
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmMzMmQ0NjcxMTFjMDIwYWUxZTI1ODRmYzUzMmUzOSIsInN1YiI6IjYzNmE3MGE2OTY1M2Y2MDA3ZDlmODgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DO7uyyjBeKJoyoH1_oFamCOJf7Nm6z3PTyeTO8Fb3Dk`,
      },
    });
  },
};

export default API;
