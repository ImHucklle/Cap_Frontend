import React from 'react';
import { Redirect } from 'react-router';

const Profile = () => {

    const logOut = ()=>{
        localStorage.removeItem("token");
        setUser({})
        console.log("User has logged out")
    }

    handleLogout = async (event) => {
        this.props.logout();
      };


    return (
        <div>
            
        </div>
    )
}

export default Profile
