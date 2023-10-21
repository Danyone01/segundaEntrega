import React, { useContext, useEffect } from "react"
import { CartCtx } from "../../context/CartContext"
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom";
import './styles.css'
// import { addDoc, doc, updateDoc } from "firebase/firestore"
// import { db, orderCollections, productsCollection } from "../../firebase/config"


const Cart = () =>  {
    const { cart : cartProducts, emptyCart } = useContext(CartCtx)
    // const createOrderInFirebase = () =>  {
    //     addDoc(productsCollection, product)
    //     .then(product => console.log(product.id))
    //     .catch(err =>console.log(err))
    // }
    // const updateProduct = async() => {
    //     try {
    //         const getReferenceDocument = doc(db, "products", "kwEJBGmpKPp85ElUMxBo");
    //         await updateDoc(getReferenceDocument, {price: 1000});
    //         console.log("Document updated successfully.");
    //       } catch (error) {
    //         console.error("Error updating document:", error);
    //       }
    // }

    return  (
        <Layout>
        {cartProducts.length === 0 ? (
          <div>
            <h1>No tienes productos en tu carrito</h1>
          </div>
        ) : (
          <div className="cart-container">
            <h1 className="cart-header">Tu Carrito de Compras</h1>
            <div className="cart-items">
              {cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <h3>{product.nombre}</h3>
                  <p>Cantidad: {product.quantity}</p>
                </div>
              ))}
            </div>
            <div className="cart-buttons">
              <button onClick={emptyCart}>Vaciar Carrito</button>
              <Link to="/checkout">
                <button>Ir al Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </Layout>
    );
  };
  
  export default Cart;