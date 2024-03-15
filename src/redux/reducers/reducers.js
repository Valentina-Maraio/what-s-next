import {
  FETCH_JSON_REQUEST,
  FETCH_JSON_SUCCESS,
  FETCH_JSON_FAILURE,
} from "../actions/actions";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JSON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JSON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_JSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;