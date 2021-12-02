import React, {useState, useEffect} from 'react';
import { spoonacularAPIKey } from '../keys';
import './App.css';


function App(){
    const creator = ['Myles'];

    useEffect(() =>{
        console.log("The key is", spoonacularAPIKey);
    })
    
    return (
        <h1>App.jsx Component/What's to Eat?</h1>
    )
    
}

export default App;