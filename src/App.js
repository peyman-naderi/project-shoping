import './App.css';
import { Route,Routes } from "react-router-dom";
import './index.css'
import React from 'react';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import ProductsSHegeftAngiz from './Components/Products';
// import UserPanel from './Components/User';
// import Carts from './Components/Carts';
import Sellers from './Components/Sellers';

function App() {
  return (
    <>
    {/* <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/product1" element={<ProductsSHegeftAngiz/>} />
    </Routes> */}

    {/* <UserPanel /> */}
    {/* <Carts /> */}

    <Sellers />
    </>
  );
}

export default App;
