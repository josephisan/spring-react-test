import Header from './components/Header/Header';
import ListProducts from './components/ListProducts/ListProducts';
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from './Pages/ArticlesPage';
import Articles from './components/Dashboard/Articles';

function App() {
  
  return (

    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<ListProducts />} />
          <Route path="/articles" element={<Articles />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
