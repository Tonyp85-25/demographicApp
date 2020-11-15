import { data } from 'autoprefixer';
import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_RATE_EXCHANGES = 'GET_RATE_EXCHANGES';

export const fetchCountries = () => {
  return async function (dispatch) {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    dispatch({type: GET_COUNTRIES, payload: response.data});
  };
};

export const fetchRateExchange = (country) => {
      return async function(dispatch){
        const response = await axios.get(`https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formatedDate(new Date)}&base=USD&symbols=${country.currencyCode}`);
        dispatch({type: GET_RATE_EXCHANGES, 
          payload: {rates:response.data.rates,...country}})
      }
}

function formatedDate(date){
 return date.toISOString().split("T")[0]
}

function getLastMonth(){
  let now = new Date()
  now.setMonth(now.getMonth()-1)
  return formatedDate(now)
}


