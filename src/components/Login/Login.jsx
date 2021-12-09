import React, {useState, useEffect} from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router';

const Login = () => {
    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");
    const [currentUser, setCurrentUser] = useState();
    const [jwt, setJwt] = useState();
  
    function getJWT() {
      const jwt = localStorage.getItem('token');
      setJwt(jwt);
    };
  
    function getUser() {
      try{
        const user = jwtDecode(jwt);
        console.log(user)
        setCurrentUser(user)
      } catch {
      }
    };
  
    useEffect(()=> {
        getJWT();
    },[])
    useEffect(()=> {
        console.log(jwt)
        getUser();
    },[jwt])
  
    const onSubmit = async (e)=>{
        e.preventDefault();
        let user ={
            "username": userName,
            "password": password,
        }
        console.log("User Info: ", user)
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
        console.log("Token results are: ", response.data)
        // add response to local storage.
        localStorage.setItem("token", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
        getJWT()
    };

    
    
    return (
      <div className="Login">
        <form className="login-form" onSubmit={onSubmit}>
            <label>UserName</label>
            <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
            <label>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Login</button>
        </form>
      </div>
    )
};

export default Login;