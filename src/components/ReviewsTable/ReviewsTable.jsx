import React, {useState} from 'react';
import { Link } from "react-router-dom";

const ReviewsTable = ({recipe}) => {
    const {comment_box, recipe} = recipe.recipe;

    return(
        <div className="recipe">
            <h2>{recipe}</h2>
            <p>{comment_box}</p>
        </div>
    );
}

export default ReviewsTable;