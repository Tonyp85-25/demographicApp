import {combineReducers} from 'redux';
import ReducerCountries from '../reducers/reducer_countries';

const rootReducer = combineReducers({
  countryReducer: ReducerCountries,
});

export default rootReducer;
