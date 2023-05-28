import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {UserContext} from '../UserContext.js'
import { Navigate } from "react-router-dom";

export default function Nav(){

        const {setUserInfo, userInfo} = useContext(UserContext)

        useEffect(()=>{
            fetch('/login', {
                credentials: 'include',
            }).then((res)=> res.json().then((userInfo)=>{
                setUserInfo(userInfo)
            }))
        },[])

        function logout(){
            fetch("/logout", {
              credentials: 'include',
              method: 'POST',
            })
            setUserInfo(null);
        
          }

          const username= userInfo?.username;

          return (
            <header>
      <Link to="/" className="logo">
        {/*--------------------- Logo ---------------------*/}
        DealDex
        
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link to='/profile'>View Profile</Link>
            <a href="" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
)
}