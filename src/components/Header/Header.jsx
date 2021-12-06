import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Whats To Eat</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/register">Register</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/profile">My Profile</a></li>
                  <li><a class="dropdown-item" href="/saved">Saved Recipes</a></li>
                  <li><a class="dropdown-item" href="/contact">Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            
    )
}

export default Header;