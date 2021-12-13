// import axios from 'axios';
import './Profile.css';
import SavedRecipes from '../SavedRecipes/SavedRecipes';
import Reviews from '../Reviews/Reviews';
import React from 'react';

const Profile = ({ user }) => {

  return (
    <div className="container">
      <div className="Profile">
        {user && <h2>Welcome {user.username} </h2>}
        <h4 className="Reviews">
          <SavedRecipes />
          <Reviews />
        </h4>
      </div>
    </div>
  )
}

export default Profile
