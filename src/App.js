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
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Selection" element={<SelectionPage />} />
                    <Route path="/Cakes" element={<CakesPage />} />
                    <Route path="/Drinks" element={<DrinksPage />} />
                    <Route path="/Vendors" element={<VendorsPage />} />
                    <Route path="/Order" element={<OrderPage />} />
                    <Route path="/Checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}