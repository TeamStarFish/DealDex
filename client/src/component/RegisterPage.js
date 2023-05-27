import React from "react";
import { useState } from "react";

export default function RegisterPage(){
    const [username, setUserName]= useState("")
    const [password, setPassword]= useState("")

    async function register(ev){
        ev.preventDefault();

        const response = await fetch("http:localhost:3000/register", {
            method:"POST",
            body:JSON.stringify({username,password}),
            header:{"Content-Type": "application/json"},
        })

        if(response.status === 200){
            alert("registration worked")
        } else {
            alert("registeration failed. try again")
        }

    }

    return (
        <div>
            <form className="register" onSubmit={register} action="">
                <p><strong>Register</strong></p>
                <input
                type="text"
                placeholder="username"    
                value={username}
                onChange={(ev)=>setUserName(ev.target.value)}
                />
                <input
                type="text"
                placeholder="password"    
                value={password}
                onChange={(ev)=>setPassword(ev.target.value)}
                />
                <button>Register</button>

            </form>

        </div>
    )
    
}