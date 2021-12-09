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

    render(){
        return (
            <div>
                <h1>Profile</h1>
                <Link to="/login" onClick={this.handleLogout}>
                    Logout Here
                </Link>
            </div>
        )
    }
}

export default Profile
