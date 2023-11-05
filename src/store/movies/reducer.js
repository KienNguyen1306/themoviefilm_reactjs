import {
  ACT_FETCH_MOVIE_DETAILE,
  ACT_FETCH_MOVIE_FILTER,
  ACT_FETCH_MOVIE_NOPLAY,
  ACT_FETCH_MOVIE_POPUPLAR,
  ACT_FETCH_MOVIE_TOPRATE,
  ACT_FETCH_MOVIE_UPCOMING,
} from "./action";

const initState = {
  moviesPopular: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  moviesTopRate: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  moviesUpcoming: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  moviesNoplay: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  moviesFilter: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  moviesDetail: { detail: false, actor: [] },
  moviesReate: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
};

function moviesReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_MOVIE_POPUPLAR:
      return {
        ...state,
        moviesPopular: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.lists
              : [...state.listPaging.lists, ...action.payload.lists],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
        },
      };
    case ACT_FETCH_MOVIE_TOPRATE:
      return {
        ...state,
        moviesTopRate: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.lists
              : [...state.listPaging.lists, ...action.payload.lists],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
        },
      };
    case ACT_FETCH_MOVIE_UPCOMING:
      return {
        ...state,
        moviesUpcoming: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.lists
              : [...state.listPaging.lists, ...action.payload.lists],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
        },
      };
    case ACT_FETCH_MOVIE_NOPLAY:
      return {
        ...state,
        moviesNoplay: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.lists
              : [...state.listPaging.lists, ...action.payload.lists],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
        },
      };
    case ACT_FETCH_MOVIE_DETAILE:
      return {
        ...state,
        moviesDetail: {
          detail: action.payload.movie,
          actor: action.payload.actor,
        },
        moviesReate: { lists: action.payload.reate },
      };

    case ACT_FETCH_MOVIE_FILTER:
      return {
        ...state,
        moviesFilter: {
          lists: action.payload.lists,
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
        },
      };
    default:
      return state;
  }
}

export default moviesReducer;
