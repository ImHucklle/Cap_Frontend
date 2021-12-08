import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Search  from './Search/Search';


function App() {
 
        return (   
            <Router>
              <Header />
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </Router>
        )
}

export default App;