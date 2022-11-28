import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/AssortmentPage";
import OrderPage from "./Pages/OrderPage";
import CheckoutPage from "./Pages/CheckoutPage";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Assortment" element={<MenuPage />}></Route>
          <Route path="Order" element={<OrderPage />}></Route>
          <Route path="Checkout" element={<CheckoutPage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </>
  )
}