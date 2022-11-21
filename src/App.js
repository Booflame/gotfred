import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  )
}