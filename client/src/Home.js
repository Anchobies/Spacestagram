import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from "react-router-dom";

function Home({ value, setValue }) {
    const navigate = useNavigate();

    if (window.location.pathname !== "/") {
        navigate("/");
    }
    
    function handleSearch(query) {
        if (query === "random") {
            navigate(`/search/random`);
        } else {
            navigate(`/search/${query}`);
        }
    }

    return (
        <header>
            <h1>Spacestagram</h1>
            <SearchBar value={value} setValue={setValue} handleSearch={handleSearch} />
        </header>
    )
}

export default Home
