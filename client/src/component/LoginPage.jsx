import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  //creating this for userInfo refresh. grab it from useContext and pass in UserContext
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      //need add creditionals laters;
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong password or username");
    }
  }

  if (redirect) {
    //once it successful we navigate to this path
    return <Navigate to={"/"} />;
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={login}
        action=''>
        <p>
          <strong>Login</strong>
        </p>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          type='text'
          placeholder='username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          type='password'
          placeholder='password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Login
        </button>
      </form>
    </div>
  );
}
