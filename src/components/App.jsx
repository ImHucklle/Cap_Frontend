import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Search  from './Search/Search';
import Profile from './Profile/Profile';
import AboutPage from './AboutPage/AboutPage';
import Reviews from './Reviews/Reviews';
import SavedRecipes from './SavedRecipes/SavedRecipes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
      console.log(user)
    } catch {
    }
    
  }

  render() {
    const user = this.state.user;
    return (   
      <Router>
        <Header />
          <Switch>
          <Route path="/search" component={Search} />
          <Route path="/profile" render={props => {
            if (!user){
              return <Redirect to="/login" />;
            }else {
              return <Profile {...props} user={user} 
              />
            }
          }} />
          <Route path="/login" component={Login}/>        
          <Route path="/register" component={Register} />
          <Route path="/saved" component={SavedRecipes} />
          <Route path="/review" component={Reviews} />
          <Route path="/about" component={AboutPage} />
          </Switch>
      </Router>
    )
  }
}

export default App;