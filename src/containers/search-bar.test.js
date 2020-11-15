// import axios from 'axios';
// import {fetchCountries} from './index'
import React from 'react';
import { Provider } from 'react-redux';
import {act} from 'react-dom/test-utils'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import SearchContainer from './search-bar';

// jest.mock('axios');

// test('should get countries', async () =>{
//     const countries = [{name: "Groland", currencyCode: "GRD$",flag: "myflag", code: "GRD"}]
//     const resp = {data: countries}
//     axios.get.mockValue(resp)
//     return fetchCountries().then(d)
// })
const mockStore = configureStore([]);
describe('components > SearchContainer', () => {
    let component;
    let store;
  
    beforeEach(() => {
      store = mockStore({
        countryReducer: {
          countries: [{name: "Groland", currencyCode: "GRD$",flag: "myflag", code: "GRD"}],
        },
        
      });
   
      component = renderer.create(
        <Provider store={store}>
          <SearchContainer/>
        </Provider>
     );
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        act(()=>{
          render(<Provider store={store}><SearchContainer/></Provider>, div);
        })
        
    });
    it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

});