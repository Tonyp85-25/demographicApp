import {combineReducers} from 'redux';
import ReducerCountries from '../reducers/reducer_countries';
import RateReducer from './reducer_rate_exchange';

const rootReducer = combineReducers({
  countryReducer: ReducerCountries,
  rateExchangeReducer: RateReducer
});

export default rootReducer;
