import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Filler from './component/FillerPage.jsx';
import RegisterPage from './component/RegisterPage.jsx';
import LoginPage from './component/LoginPage.jsx';
import { UserContextProvider } from './UserContext.js';

export default function App() {




  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Filler />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/login"} element={<LoginPage />} />
    </Routes>

    </UserContextProvider>
  );
}
