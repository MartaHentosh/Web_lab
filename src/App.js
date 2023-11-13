import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Catalog from "./pages/catalog/Catalog";
import elementsData from "./components/elements/ElementsList";
import Item from "./pages/item/Item"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<Item elementsData={elementsData} />} />
        <Route path="/Cart" element={<div class="cart">comming soon</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
