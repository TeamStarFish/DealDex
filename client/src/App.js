import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import FillerPage from './component/FillerPage';
import RegisterPage from './component/RegisterPage';
import LoginPage from './component/LoginPage';

export default function App() {
  return (
    <Routes>
      {/* <Route index element={<FrontPage/ >} />  will start here */}
      <Route path="/" element={<FillerPage />} />
      {/* <Link to="/register">Testing Register</Link> */}
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/login"} element={<LoginPage />} />
    </Routes>
  );
}
