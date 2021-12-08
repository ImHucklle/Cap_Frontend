import React, {useState} from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipes = ({recipe}) => {
    const [toggle, setToggle] = useState(false)

    const {label, image, url, ingredients} = recipe.recipe;
    return(
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={() => setToggle(!toggle)}>Ingredients</button>
            {toggle && <RecipeDetails ingredients={ingredients}/>}
        </div>
    );
}

export default Recipes;