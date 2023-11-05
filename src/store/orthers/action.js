import ortherService from "../../services/ortherServices";

export const ACT_FETCH_CATEROGY = 'ACT_FETCH_CATEROGY'
export const ACT_FETCH_COUNTRY = 'ACT_FETCH_COUNTRY'




// caterogy
export function actFetchCaterogy(lists) {
  return {
    type: ACT_FETCH_CATEROGY,
    payload: {lists},
  };
}

export function actFetchArticlesOrtherAsync() {
  return async (dispatch) => {
    const response = await ortherService.getAllCaterogy()
   let datas = response.data.genres
    dispatch(actFetchCaterogy(datas))
  };
}


// coutry
export function actFetchCoutry(lists) {
  return {
    type: ACT_FETCH_COUNTRY,
    payload: {lists},
  };
}

export function actFetchArticlesCoutryAsync() {
  return async (dispatch) => {
    const response = await ortherService.getAllCountry()
   let datas = response.data
  //  console.log('country',datas)
    dispatch(actFetchCoutry(datas))
  };
}
