import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './container/Main.jsx';
import FillerPage from './component/FillerPage.jsx';
import RegisterPage from './component/RegisterPage';
import LoginPage from './component/LoginPage';
import { UserContextProvider } from './UserContext.js';

export default function App() {
  //navbar here, above h1
  return (
    <UserContextProvider>
      <h1>DealDex</h1>
      <Routes>
        {/* <Route index element={<FrontPage/ >} />  will start here */}
        <Route path="/" element={<FillerPage />} />
        {/* <Link to="/register">Testing Register</Link> */}
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/login'} element={<LoginPage />} />
      </Routes>
      <p>hello</p>
      <Main />
    </UserContextProvider>
  );
}
