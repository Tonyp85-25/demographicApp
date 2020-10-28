import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';

export const fetchCountries = () => {
  return async function (dispatch) {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    dispatch({type: GET_COUNTRIES, payload: response.data});
  };
};
