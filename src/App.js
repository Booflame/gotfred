import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import SelectionPage from "./Pages/SelectionPage";
import CakesPage from "./Pages/CakesPage";
import DrinksPage from "./Pages/DrinksPage";
import VendorsPage from "./Pages/VendorsPage";
import OrderPage from "./Pages/OrderPage";
import CheckoutPage from "./Pages/CheckoutPage";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Selection" element={<SelectionPage />}></Route>
          <Route path="Cakes" element={<CakesPage />}></Route>
          <Route path="Drinks" element={<DrinksPage />}></Route>
          <Route path="Vendors" element={<VendorsPage />}></Route>
          <Route path="Order" element={<OrderPage />}></Route>
          <Route path="Checkout" element={<CheckoutPage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </>
  )
}