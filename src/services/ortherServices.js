import API from "./api";

const ortherService = {
  getAllCaterogy: ({ page = 1 }={}) => {
    return API.callWithToken().get(`genre/movie/list?language=vi`);
  },
  getAllCountry: ({ page = 1 }={}) => {
    return API.callWithToken().get(`configuration/countries?language=vi`);
  },
};

export default ortherService;
