// import axios from 'axios';
import './Profile.css';
import SavedRecipes from '../SavedRecipes/SavedRecipes';
import Reviews from '../Reviews/Reviews';
import React from 'react';

const Profile = () => {


  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2 className="Reviews">
        <SavedRecipes />
        <Reviews />
      </h2>
    </div>
  )
}

export default Profile
