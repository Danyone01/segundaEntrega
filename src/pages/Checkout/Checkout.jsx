import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartCtx } from '../../context/CartContext';
import { addDoc, doc, updateDoc } from "firebase/firestore"
import { db, orderCollections, productsCollection } from "../../firebase/config"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [totalCost, setTotalCost] = useState(0);
  
    const { cart } = useContext(CartCtx);
  
    useEffect(() => {
      calculateTotalCost();
    }, [cart]);
  
    const calculateTotalCost = () => {
      const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.precio;
      }, 0);
      setTotalCost(total);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleConfirmEmailChange = (event) => {
      setConfirmEmail(event.target.value);
    };
  
    const isEmailValid = email === confirmEmail;
  
    const createOrder = () => {
        const order = {
          items: cart,
          customerName: name,
          customerEmail: email,
          totalCost: totalCost,
        };
  
        addDoc(orderCollections, order)
        .then(() => {
          toast.success('La compra fue realizada con éxito!', {
            position: 'top-center',
            autoClose: 3000,
          });
        })
        .catch((error) => {
          console.error('Error adding order to Firestore:', error);
        });
    };

    return (
      <div>
        <h1>Checkout</h1>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.nombre} - Cantidad: {item.quantity} - Precio: ${item.precio}
              </p>
            </div>
          ))}
        </div>
        <p>Costo total: ${cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2)}</p>
        <br />
        <br />
        <p>Ingresa tus datos para proceder con la compra</p>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="email"
          placeholder="Confirmar Email"
          value={confirmEmail}
          onChange={handleConfirmEmailChange}
        />
        {!isEmailValid && (
          <p style={{ color: 'red' }}>Email and Confirm Email must match</p>
        )}
         <button onClick={createOrder}>Proceder al Pago</button>
      </div>
    );
  };
  
  export default Checkout;