import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Catalog from "./pages/catalog/Catalog";
import Item from "./pages/item/Item"
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/Sign-up";
import { getFridges } from "./api";

function App() {
  const [elementsData, setElementsData] = useState('');
  const [loggedUser, setLoggedUser] = useState(null);
  const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");

  useEffect(() => {
    setLoggedUser(loggedInUserIndex);
    getFridges()
        .then(response => {
            console.log(response)
            setElementsData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

console.log(elementsData)
 if(loggedUser){
  return (
    <Router>
      <Header setLoggedUser={setLoggedUser}/>
      <Routes>
      {/* <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<Item elementsData={elementsData} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path='/Success' element={<Success/>}/>
      </Routes>
      <Footer />
    </Router>
  );
 }else{
  return(
    <Router>
        <Routes>
            <Route path="/Login" element={<Login setLoggedUser={setLoggedUser}/>} />
            <Route path="/" element={<SignUp />} />
        </Routes>
    </Router>
);
 }
}

export default App;
