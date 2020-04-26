import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EmployeeList from './components/employee/EmployeeList';
import SearchBar from './components/search/SearchBar';
import Panel from './components/filter/Panel';

import searchHelpers from './helpers/searchHelpers';

const App = () => {
  /*
    Set up application state with a list of employees and search criteria
  */
  const [ employees, setEmployees ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( { value: '', type: 'name' } );

  /*
    Once component has successfully mounted, useEffect will make a GET request to retrieve employee data
  */
  useEffect(() => {

    axios.get( 'https://codepen.io/cardinalfinancial/pen/XQKXby.js' )
         .then( res => setEmployees(res.data.results) )
         .catch( err => console.log('Error: ', err) );

  },[]);

  return(
    <section className='app'>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className='main-container flex-container'>
        <Panel setSearchTerm={setSearchTerm} />
        <EmployeeList employees={ !searchTerm.value.length ? employees : searchHelpers.filter( employees, searchTerm.value, searchTerm.type ) } />
      </div>
    </section>
  )
}

export default App;
