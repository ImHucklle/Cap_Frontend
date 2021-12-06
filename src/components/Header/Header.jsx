import react from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav">
                    <ul className="navbar-nav ml-auto mt-2
                    mt-lg-0">
                        <li className="nav-item">
                            <Link to="/register"
                            className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"
                            className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;