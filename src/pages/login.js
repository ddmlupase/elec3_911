import React, {useState, useEffect} from "react";  
import { useNavigate } from "react-router-dom";

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [title,setTitle]=useState("");
    // placeholder for username and password values since we dont have database yet
    const realusername = 'admin';
    const realpassword = '1234';

    const navigate=useNavigate();

    useEffect(()=>{
        setTitle(`Hello, ${username}`);
    }, [username])

    const handleLogin=(e)=>{
        e.preventDefault();
        if(username===realusername && password===realpassword){
            alert("Logged In Successful");
            navigate("/home");
        }
        else {
            alert("Login Error");
        }
    }
    
    return(
        <div>
            <h1>Login Form</h1>
            <h2>{title}</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username}
                        required
                        maxLength={20} 
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group mb-5">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        required
                        maxLength={20} 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-danger">Login</button>
            </form>
        </div>
    )
}

export default Login;
