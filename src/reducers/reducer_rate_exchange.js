import {GET_RATE_EXCHANGES} from '../actions' 

const initialState = {
    rateExchangeList: []
}

export default function RateReducer (oldRate = initialState, action){
    switch (action.type) {
        case GET_RATE_EXCHANGES:            
            return {
                ...oldRate,
                rateExchangeList: [
                    action.payload,
                    ...oldRate.rateExchangeList
                ]
            }
    
        default:
            return oldRate
    }

}