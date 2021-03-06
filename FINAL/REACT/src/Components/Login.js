// import React, {useState, userEffect} from "react";
// import axios from "axios";

// const Login = ()=>{
//     let[token, setToken]= useState("");
//     let[name, setName] = useState("");
//     let[password, setPassword] =useState("");

//     const loginSubmit= ()=>{
//         var obj = {name: name, password: password};
//         axios.post("http://127.0.0.1:8000/api/login",obj)
//         .then(resp=>{
//             var token = resp.data;
//             console.log(token);
//             var user = {userId: token.userid, access_token:token.token};
//             localStorage.setItem('user',JSON.stringify(user));
//             // console.log(localStorage.getItem('user'));
//         }).catch(err=>{
//             console.log(err);
//         });


//     }
//     return(
//         <div>
//             <form>
//                 <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
//                 <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

//             </form>
//                 <button onClick={loginSubmit}>Login</button>
//         </div>

//     )
// }
// export default Login; 



import React, { useState, userEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";



const Login = () => {
    let history = useHistory();
   
    let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    const loginSubmit = () => {
        var obj = { name: name, password: password };
        axios.post("http://127.0.0.1:8000/api/login", obj)
            .then(resp => {
                

                var token = resp.data;
                console.log(token);
                var user = { name: token.Name, access_token: token.token };
                localStorage.setItem('name', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                if (token.token != null) {
                    window.sessionStorage.setItem("token", "exists");
                    // req.session.user = token.token;
                    window.sessionStorage.setItem("name", obj.name);
                    alert("Login successful");
                    // history.push("/ServiceProviderInformation");
                }
                // alert("Signin successful");
                // return <Redirect to="http://localhost:3000/allproducts" />;
                // navigate("/allproducts")
                // history.push("/allproducts");
            }).catch(err => {
                console.log(err);
            });


    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <b>Name:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <b>Password:</b><br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            </form>
            <button onClick={loginSubmit}>Login</button>

        </div>
        

    )
}
export default Login; 