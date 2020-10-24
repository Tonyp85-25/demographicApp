import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../actions/index'



const SearchBar = (props)=>{

   useEffect(
        () => {
        props.fetchCountries()
         return () => {
            
         };
     }, []);

    const renderSelectCountries = ()=>
    {
        return (<div className="rinline-block relative w-64">
             <select className="block appearance-none w-full rounded bg-teal-300 border border-gray-200 shadow-lg text-indigo-700 hover:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-black">
            {props.countries.map(c=> (
                <option className="" key={c.code} value={c.code}> 
                {c.name}
                </option>)
            )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
       );
    }

   

    return (
        <form>
            {renderSelectCountries()}
        </form>
    )
}

const mapStateToProps = (store) => {
    return {
        countries : store.countryReducer.countries
    }
}
const mapDispatchToProps = {
    fetchCountries
}

export default connect(mapStateToProps,mapDispatchToProps) (SearchBar)
