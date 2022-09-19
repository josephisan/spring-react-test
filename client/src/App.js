import Header from "./components/Header/Header";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "./Pages/ArticlesPage";
import OrdersPage from "./Pages/OrdersPage";
import HomePage from "./Pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
