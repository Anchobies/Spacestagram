import React from 'react';
import SearchBar from './SearchBar';

function Search({ likes, value, setValue }) {

    return (
        <section>
            <SearchBar value={value} setValue={setValue} />
        </section>
    )
}

export default Search
