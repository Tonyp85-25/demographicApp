import React from 'react'
import {connect} from 'react-redux';
import RateListItem from '../components/rateListItem'

const RateList = ({rateExchangeList}) => {
return (
<table className="mt-8 mx-auto">
    <thead className="border-solid border-2 border-gray-700">
        <tr>
            <th className="px-5 py-5 mx-2">Pays</th>
            <th className="px-5 py-5">Valeur de la monnaie par rapport au Dollar</th>
        </tr>
    </thead>
    <tbody className="bg-gray-100">
        {rateExchangeList.map((r,index)=>{
           return <RateListItem  key={r.code+index} rateExchange={r}/>
        })}
    </tbody>

</table>)
}

const mapsStateToProps = state=> {
    return {
        rateExchangeList : state.rateExchangeReducer.rateExchangeList
    }
}

export default connect (mapsStateToProps,undefined)(RateList)