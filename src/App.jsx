import './App.css';
import CartContext from './context/CartContext';
import Navigation from "./routes/Navigation";
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <CartContext>
       <Navigation /><ToastContainer />
    </CartContext>
    
  );
}

export default App;
