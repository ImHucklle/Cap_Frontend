import React, {useState} from 'react'

const SavedRecipes = () => {

    const [label, setLabel] = useState("");
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [ingredients, setIngredients] = useState("");

    return (
        <div className="container">
           <div className="form-group">
            <div className="form-control">
            <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Recipe Name"
                name="label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}/>
            <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Image"
                name="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}/>
            <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="URL"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}/>
            <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Ingredient List"
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}/>
            </div>
           </div>
        </div>
    )
}

export default SavedRecipes
