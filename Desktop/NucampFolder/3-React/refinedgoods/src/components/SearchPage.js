import React from 'react';

const SearchBar = () => (
    <div className="search-bar">
        <form action="/" method="get">

            <label htmlFor="header-search">
            <span className="visually-hidden">Searchsites</span>
            </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search site"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;