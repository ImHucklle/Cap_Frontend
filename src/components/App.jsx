import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Search  from './Search/Search';
import Profile from './Profile/Profile';
import AboutPage from './AboutPage/AboutPage';


function App() {
  
  
  return (   
    <Router>
      <Header />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login}/>        
          <Route path="/register" component={Register} />
          <Route path="/about" component={AboutPage} />
        </Switch>
    </Router>
  )
}

export default App;