import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Catalog from "./pages/catalog/Catalog";
import Item from "./pages/item/Item"
import Cart from "./pages/cart/Cart";
import { getFridges } from "./api";

function App() {
  const [elementsData, setElementsData] = useState('');

  useEffect(() => {
    getFridges()
      .then(response => {
            console.log(response)
          setElementsData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  console.log(elementsData)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<Item elementsData={elementsData} />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
