import React, {useEffect, useState} from 'react';
import { ID, API } from '../keys';
import axios from 'axios';
import Recipes from '../Recipes/Recipes';

const Search = () => {
    const[recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState('');
    const[query, setQuery] = useState('burger');
    
    useEffect(() =>{
        getRecipes();
        console.log('Effect ran..')
    }, [query]);

    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${API}`);
        setRecipes(response.data);
        console.log(response.data)
    }

    const updateSearch = e => {
       setSearch(e.target.value);
       console.log(search) 
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className="Search">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" placeholder="I want to eat..." value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            {recipes.map(recipe => (
                <Recipes title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
            ))};
        </div>
    )
}

export default Search;