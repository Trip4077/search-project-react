import React from 'react';

const SearchBar = props => {
    return(
        <div className="search-container">
            <h1>Cardinal Finance Employee Search</h1>
            <input className="search-bar"
                   type="text" 
                   placeholder="Type name to begin..."
                   onChange={ e => props.setSearchTerm({ value: e.target.value, type: 'name' }) }
            />
        </div>
    )
}

export default SearchBar;