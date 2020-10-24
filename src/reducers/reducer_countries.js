import {GET_COUNTRIES} from '../actions'

const initialState = {
    countries:[]
}

export default function (countryReducer=initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...countryReducer,
                countries: getCountriesInfo(action.payload)
            };
          

    }
    return countryReducer
}

const getCountriesInfo = data => data.map((c => {
    return {
        name : c.name,
        currencyCode : c.currencies[0].code,
        flag: c.flag,
        code: c.alpha3Code
    }
})).filter((c => c.currencyCode !== "USD"))

