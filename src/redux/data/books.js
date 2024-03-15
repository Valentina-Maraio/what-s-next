import axios from 'axios';
import { fetchJsonRequest, fetchJsonSuccess, fetchJsonFailure } from '../actions/actions';

export const booksData = () => {
  return (dispatch) => {
    dispatch(fetchJsonRequest());
    axios.get('./books.json')
      .then(response => {
        dispatch(fetchJsonSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchJsonFailure(error.message));
      });
  };
};