import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Menu" element={<MenuPage />}></Route>
          <Route path="About" element={<AboutPage />}></Route>
          <Route path="Contact" element={<ContactPage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  )
}