import React, {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { spoonacularAPIKey } from '../keys';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import Landing  from './Landing/Landing';


function App() {
    
    // const [user, setUser] = useState({})
    // const [userLogin, setUserLogin] = useState([])
    // const [jwt, setJwt] = useState()
    // const [loadData, setLoadData] = useState(false)

    // //Getting token from local storage
    // const getUserJWT = () => {
    //     const jwt = localStorage.getItem('token');
    //     try {
    //       const user = jwtDecode(jwt);
    //       setUser(user)
    //       console.log("get user jwt call", user)
    //     } catch {
    //     }
    //   }
    
    //   useEffect(() =>{
    //     getUserJWT();
    //     getUserLogin();
    //     setLoadData(!loadData)   
    //   },[])

    //   const getUserLogin = async () => {
    //     const response = await axios.get('https://127.0.0.1:8000/api/auth/user', { headers: {Authorization: 'Bearer ' + jwt}});
    //     setUserLogin(response.data);
    //     console.log(response.data)
    //   }

    //   const loginUser = async (loginUser) => {
    //     let response= await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
    //     localStorage.setItem('token', response.data.token);
    //     console.log("response axios call", response.data.token)
    //     setJwt(localStorage.getItem('token'));
    //   }

    //    const logOut = ()=>{
    //       localStorage.removeItem("token");
    //       setUser({})
    //       console.log("User has logged out")
    //     }

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