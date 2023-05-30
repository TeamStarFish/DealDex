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
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={register} action="">
                <p><strong>Register</strong></p>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="text"
                placeholder="username"    
                value={username}
                onChange={(ev)=>setUserName(ev.target.value)}
                />
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="password"
                placeholder="password"    
                value={password}
                onChange={(ev)=>setPassword(ev.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>

            </form>

        </div>
    )
    
}