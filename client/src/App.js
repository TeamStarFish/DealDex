import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import FillerPage from './component/FillerPage';

export default function App() {
  return (
    <Routes>
      {/* <Route index element={<FrontPage/ >} />  will start here */}
      <Route path="/" element={<FillerPage />} />
    </Routes>
  );
}
