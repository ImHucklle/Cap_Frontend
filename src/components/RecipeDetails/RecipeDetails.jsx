import React from 'react';
import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                {/* <li className="ingredient-dish-type">{ingredient.dishType}</li>
                <li className="ingredient-meal-type">{ingredient.mealType}</li> */}
            </ul>
        )
    });
};

export default RecipeDetails
