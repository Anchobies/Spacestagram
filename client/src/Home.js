import React from 'react';
import SearchBar from './SearchBar';

function Home({ value, setValue }) {
    return (
        <header>
            <h1>Spacestagram</h1>
            <SearchBar value={value} setValue={setValue} />
        </header>
    )
}

export default Home
