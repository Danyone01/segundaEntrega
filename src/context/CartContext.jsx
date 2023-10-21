import { createContext, useState } from "react"

export const CartCtx = createContext()

const CartContext = ({children}) =>   {
    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (idProduct) =>    {
        const findProduct = listProducts.find((product) => product.id === idProduct)
       
        const existingProductIndex = cart.findIndex((product) => product.id === idProduct)
        
        if(existingProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex].quantity++
            setCart(updatedCart);
        } else{
            setCart([...cart, { ...findProduct, quantity: 1}])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    return  (
        <CartCtx.Provider value={{listProducts,setListProducts, cart, setCart, addToCart, emptyCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext