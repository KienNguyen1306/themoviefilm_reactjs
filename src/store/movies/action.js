import movieService from "../../services/movieServices";

export const ACT_FETCH_MOVIE_POPUPLAR = "ACT_FETCH_MOVIE_POPUPLAR";
export const ACT_FETCH_MOVIE_TOPRATE = "ACT_FETCH_MOVIE_TOPRATE";
export const ACT_FETCH_MOVIE_UPCOMING = " ACT_FETCH_MOVIE_UPCOMING";
export const ACT_FETCH_MOVIE_NOPLAY = " ACT_FETCH_MOVIE_NOPLAY";
export const ACT_FETCH_MOVIE_DETAILE = " ACT_FETCH_MOVIE_DETAILE";
export const ACT_FETCH_MOVIE_FILTER = "ACT_FETCH_MOVIE_FILTER";


// popular
export function actFetchMovieTrending(movies, totalpages, currenPage) {
  return {
    type: ACT_FETCH_MOVIE_POPUPLAR,
    payload: { lists: movies, currenPage: currenPage, totalpages: totalpages },
  };
}

export function actFetchArticlesLatestAsync({ page = 1 } = {}) {
  return async (dispatch) => {
    const response = await movieService.getAllPopular();
    let datas = response.data;
    dispatch(actFetchMovieTrending(datas.results, datas.total_pages, page));
  };
}

// top rate
export function actFetchMovieTopRate(movies, totalpages, currenPage) {
  return {
    type: ACT_FETCH_MOVIE_TOPRATE,
    payload: { lists: movies, currenPage: currenPage, totalpages: totalpages },
  };
}

export function actFetchMovieTopRateAsync({ page = 1 } = {}) {
  return async (dispatch) => {
    const response = await movieService.getAllTopRate();
    let datas = response.data;
    dispatch(actFetchMovieTopRate(datas.results, datas.total_pages, page));
  };
}

// upcoming
export function actFetchMovieUpcoming(movies, totalpages, currenPage) {
  return {
    type: ACT_FETCH_MOVIE_UPCOMING,
    payload: { lists: movies, currenPage: currenPage, totalpages: totalpages },
  };
}

export function actFetchMovieUpcomingAsync({ page = 1 } = {}) {
  return async (dispatch) => {
    const response = await movieService.getAllUpcoming();
    let datas = response.data;
    dispatch(actFetchMovieUpcoming(datas.results, datas.total_pages, page));
  };
}

// npplay
export function actFetchMovieNoPlay(movies, totalpages, currenPage) {
  return {
    type: ACT_FETCH_MOVIE_NOPLAY,
    payload: { lists: movies, currenPage: currenPage, totalpages: totalpages },
  };
}

export function actFetchArticlesNoPlayAsync({ page = 1 } = {}) {
  return async (dispatch) => {
    const response = await movieService.getAllNoPlay();
    let datas = response.data;
    dispatch(actFetchMovieNoPlay(datas.results, datas.total_pages, page));
  };
}

// detail Film
export function actFetchMovieDetail(movie, reate, actor) {
  return {
    type: ACT_FETCH_MOVIE_DETAILE,
    payload: { movie, reate, actor },
  };
}

export function actFetchArticlesDetailAsync(id) {
  return async (dispatch) => {
    const response = await movieService.getDetailFilm(id);
    let datas = response.data;
    const responseReate = await movieService.getFilmReate(datas.id);
    let datasreate = responseReate.data;
    const responseActor = await movieService.getDetailFilmActor(datas.id);
    dispatch(
      actFetchMovieDetail(datas, datasreate.results, responseActor.data.cast)
    );
  };
}


// popular
export function actFetchMovieFilter(lists, totalpages, currenPage) {
  return {
    type: ACT_FETCH_MOVIE_FILTER,
    payload: { lists: lists, currenPage: currenPage, totalpages: totalpages },
  };
}

export function actFetchArticlesFilterAsync({ page = 1,id,type,key } = {}) {
  return async (dispatch) => {
    const response = await movieService.getMovieFilter({page,id,type,key})
    let datas = response.data;
    dispatch(actFetchMovieFilter(datas.results, datas.total_pages, page));
  };
}
