import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Search  from './Search/Search';
import Profile from './Profile/Profile';


function App() {
  

  return (   
    <Router>
      <Header />
        <Switch>
          <Route path="/profile" component={Profile} logout={logOut}/>
          <Route path="/login" component={Login}/>        
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
        </Switch>
    </Router>
  )
}

export default App;