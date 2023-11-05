import API from "./api";

const movieService = {
  getAllPopular: ({ page = 1 } = {}) => {
    return API.callWithToken().get(`movie/popular?page=${page}&language=vi`);
  },
  getAllTopRate: ({ page = 1 } = {}) => {
    return API.callWithToken().get(`movie/top_rated?page=${page}&language=vi`);
  },
  getAllUpcoming: ({ page = 1 } = {}) => {
    return API.callWithToken().get(`movie/upcoming?page=${page}&language=vi`);
  },
  getAllNoPlay: ({ page = 1 } = {}) => {
    return API.callWithToken().get(
      `movie/now_playing?page=${page}&language=vi`
    );
  },
  getDetailFilm: (id) => {
    return API.callWithToken().get(`movie/${id}?language=vi`);
  },
  getFilmReate: (id) => {
    return API.callWithToken().get(`/movie/${id}/recommendations?language=vi`);
  },
  getDetailFilmActor: (id) => {
    return API.callWithToken().get(`/movie/${id}/credits?language=vi`);
  },
  getMovieFilter: ({ page = 1, id, type, key } = {}) => {
    let url = "";
    const typeToUrlMap = {
      caterogy: `/discover/movie?language=vi&page=${page}&with_genres=${id}`,
      country: `/discover/movie?language=vi&page=${page}&with_origin_country=${id}`,
      search: `/search/movie?language=vi&page=${page}&query=${key}`,
      noplay: `movie/now_playing?page=${page}&language=vi`,
      upcoming: `movie/upcoming?page=${page}&language=vi`,
      toprate: `movie/top_rated?page=${page}&language=vi`,
      topview: `trending/movie/day?page=${page}&language=vi`,
    };

    if (type in typeToUrlMap) {
      url = typeToUrlMap[type];
    }
    return API.callWithToken().get(url);
  },
};

export default movieService;
