export const FETCH_JSON_REQUEST = "FETCH_JSON_REQUEST";
export const FETCH_JSON_SUCCESS = "FETCH_JSON_SUCCESS";
export const FETCH_JSON_FAILURE = "FETCH_JSON_FAILURE";

export const fetchJsonRequest = () => ({
  type: FETCH_JSON_REQUEST,
});

export const fetchJsonSuccess = (data) => ({
  type: FETCH_JSON_SUCCESS,
  payload: data,
});

export const fetchJsonFailure = (error) => ({
  type: FETCH_JSON_FAILURE,
  payload: error,
});
