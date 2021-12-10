import axios from 'axios';
import './Profile.css';
import SavedRecipes from '../SavedRecipes/SavedRecipes';
import Reviews from '../Reviews/Reviews';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logout: "",
      };
    }

    handleLogout = async (event) => {
        this.props.logout();
      };

    componentDidMount() {
      
    }

    render(){
        return (
            <div className="Profile">
                <h1>Profile</h1>
                <Link to="/login" onClick={this.handleLogout}>
                    Logout Here
                </Link>
                <h2 className="Reviews">
                  <SavedRecipes />
                  <Reviews />
                </h2>
            </div>
        )
    }
}

export default Profile
