import React, {useEffect, useState} from 'react';
import { ID, API } from '../keys';
import axios from 'axios';

const Search = () => {
    const[searchResults, setResults] = useState([])
    
    useEffect(() =>{
        getRecipes();
        console.log('Effect ran..')
    }, []);

    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${ID}&app_key=${API}`);
        setResults(response.data);
        console.log(response.data)
    }

    return(
        <div className="Search">
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;
