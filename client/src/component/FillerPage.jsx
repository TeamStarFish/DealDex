import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


export default function Filler() {
  return (
    <div>
      <h1>Testing</h1>
      <Link to="/register">Register Test Link</Link>
      <Link to="/login">Login Test Link</Link>
    </div>
  );
}
