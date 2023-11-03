import React, { useContext,useState } from "react";
import UserContext from "./UserContext";

const Login = (e) => {
    const [username,setUsername] = useState("");
    const [password,setpassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
            e.preventDefault();
            setUser({username,password})
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;