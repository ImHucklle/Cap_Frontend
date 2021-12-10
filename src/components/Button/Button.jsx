import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: ""
    };
  }

  handleLogout = async (event) => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        <Link to="/login" onClick={this.handleLogout}>
          <button className="btn">Logout</button>
        </Link>
      </div>
    );
  }
}
export default Button;