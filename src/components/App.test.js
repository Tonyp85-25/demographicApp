import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils'
import App from './app';


const mockStore = configureStore([]);
describe('components > App', () => {
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
        <App/>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    act(()=>{
      render(<Provider store={store}>
        <App/>
      </Provider>);
    });
    const textElement = screen.getByText(/Demographic App/);
    expect(textElement).toBeInTheDocument();
  });
  
    
});
  


