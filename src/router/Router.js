
import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import CartWidget from '../components/cart/CartWidget';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import { NavBar } from '../components/navbar/NavBar';
import GuiaDeTallas from '../components/pages/GuiaDeTallas';
import Home from '../components/pages/Home';
import Productos from '../components/pages/Producto';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Productos" element={< Productos/>} />
          <Route path="GuiaDeTallas" element={<GuiaDeTallas />} />
          <Route path="Contenedor" element={<ItemListContainer />} />
          <Route path="carrito" element={<CartWidget />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router