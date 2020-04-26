import React from 'react';
import filters from './FilterSelections';

const Panel = props => {
    const changeHandler = e => {
        props.setSearchTerm({
            value: e.target.value,
            type: e.target.name
        })
    }

    return(
        <div className="filter-panel">
            <h2>Filters:</h2>

            <form className="filter-form">
                <div>
                    <label htmlFor="titles">Title:</label>
                    <select id="titles" name="job_title" onChange={changeHandler}>
                        {
                            filters.titles.map( title => <option key={title} value={title}>{title}</option> )
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="departments">Department:</label>
                    <select id="departments" name="department" onChange={changeHandler}>
                        {
                            filters.departments.map( department => <option key={department} value={department}>{department}</option> )
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="states">State:</label>
                    <select id="states" name="state" onChange={changeHandler}>
                        {
                            filters.states.map( state => <option key={state} value={state}>{state}</option> )
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Panel;