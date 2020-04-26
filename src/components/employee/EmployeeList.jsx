import React from 'react';
import Preview from './Preview';

const EmployeeList = props => {
  return (
    <div className='preview-container'>
      {
        !props.employees.length ? <h2>No Results Found</h2> : props.employees.map( employee => <Preview key={employee.id} employee={employee} /> ) 
      }
    </div>
  )
}

export default EmployeeList;