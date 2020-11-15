import React from 'react'
import ReactChartKick, {AreaChart} from 'react-chartkick'
import RateReducer from '../reducers/reducer_rate_exchange'
import Chart from 'chart.js'

ReactChartKick.addAdapter(Chart);
const RateListItem = ({rateExchange})=>{
    //console.log(rateExchange.rates)
    return <tr><td className="border-solid border-2 border-gray-700 px-16">{rateExchange.name}<br/><img src={rateExchange.flag} height="60" width="100"/></td>
        <td className="px-5 py-5 border-gray-700 border-solid border-b-2 border-r-2"><AreaChart xtitle="Date" ytitle={rateExchange.currencyCode} data={formatData(rateExchange.rates,rateExchange.currencyCode)}/></td></tr>
}

function formatData(rates,currencyCode){
   return Object.keys(rates).map(date=>{
        return [date,rates[date][currencyCode]]

    })
}

export default RateListItem