import { ACT_FETCH_CATEROGY, ACT_FETCH_COUNTRY } from "./action";

const initState = {
  listCaterogy: { lists: [] },
  listCoutry: { lists: [] },

};

function ortherReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEROGY:
      return {
        ...state,
        listCaterogy: {
          lists: action.payload.lists,
        },
      };
      case ACT_FETCH_COUNTRY:
        return {
          ...state,
          listCoutry: {
            lists: action.payload.lists,
          },
        };
    default:
      return state;
  }
}

export default ortherReducer;
