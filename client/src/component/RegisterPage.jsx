import React from "react";
import { useState } from "react";

export default function RegisterPage(){
    const [username, setUserName]= useState("")
    const [password, setPassword]= useState("")

    async function register(ev){
        ev.preventDefault();

        const response = await fetch("/register", {
            method:"POST",
            body:JSON.stringify({username , password}),
            headers:{"Content-Type": "application/json"},
        })
        
      if(response.status == 200){
        alert("success")
      } else{
        alert("Failure")
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
                type="password"
                placeholder="password"    
                value={password}
                onChange={(ev)=>setPassword(ev.target.value)}
                />
                <button>Register</button>

            </form>

        </div>
    )
    
}