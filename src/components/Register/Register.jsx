import React, {useState} from 'react';
import './Register.css';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

// ========================================================================== //
// Hooks

const Register = () => {
    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");
    const[email, setEmail] = useState("");
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[middleName, setMiddleName] = useState("");

// ========================================================================== //
// Setting payload for POST request

    const onSubmit = async (e)=>{
        e.preventDefault();
        let payload = {
            "username": userName,
            "password": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName,
            "middle_name": middleName
        }
        console.log("Registered user info:", payload)
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', payload);
        console.log("New user data sent: ", response.data)
        window.location = '/login';
    };

// ========================================================================== //
// Rendering    

    return (
        <div className="Register">
            <form className="form" onSubmit={onSubmit}>
                <label>UserName</label>
                <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
                <label>Password</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                <label>Email</label>
                <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                <label>First Name</label>
                <input type='text' onChange={(e)=>setFirstName(e.target.value)}></input>
                <label>Last Name</label>
                <input type='text' onChange={(e)=>setLastName(e.target.value)}></input>
                <label>Middle Name</label>
                <input type='text' onChange={(e)=>setMiddleName(e.target.value)}></input>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
};

export default Register;
