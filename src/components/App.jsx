import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Landing  from './Landing/Landing';

function App() {
 
        return (   
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </Router>
        )
}

export default App;