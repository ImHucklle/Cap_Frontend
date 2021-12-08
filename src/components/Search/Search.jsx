import React, {useState} from 'react';
import { ID, API } from '../keys';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipes from '../Recipes/Recipes';

const Search = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${API}`);
        setRecipes(response.data.hits)
        console.log(response)
        setQuery("");
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getRecipes();
    }

    return(
        <div className="Search">
            <h1>What's To Eat</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="What's to Eat..?"
                autoComplete="off" onChange={onChange} value={query}/>
                <input type="submit" value="search"/>
            </form>
            <div className="recipes">
                {recipes !==[] && 
                recipes.map(recipe => <Recipes key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    )
}
export default Search;