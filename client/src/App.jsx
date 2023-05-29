import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './container/Main.jsx';
import FillerPage from './component/FillerPage.jsx';
import RegisterPage from './component/RegisterPage.jsx';
import LoginPage from './component/LoginPage.jsx';
import { UserContextProvider } from './UserContext.jsx';
import Navigation from './container/Navigation.jsx';

export default function App() {
  //navbar above h1
  return (
    <div className="flex flex-col h-screen border-2 border-solid border-orange-400">
      <UserContextProvider>
        <h1 className="border border-solid border-blue-400">NAV BAR</h1>
        <h1 className="text-3xl font-bold underline text-center border border-solid border-red-400">
          DealDex
        </h1>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route index element={<></>} />
          {/* <Link to="/register">Testing Register</Link> */}
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
        <Main />
      </UserContextProvider>
    </div>
  );
}

//removed <FillerPage /> from line 21 element={}
