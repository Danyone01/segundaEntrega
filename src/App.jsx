import { productos } from "./products";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from "react";
import CardCustom from "./components/Card";
import ItemList from "./components/itemList/ItemList";
import Item from "./components/item/Item";
import { useCount } from "./hooks/useCount";

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {count, increment, decrement} = useCount()

  const getData = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  };

  const requestJsonPlaceHolder = () => fetch('https://fakestoreapi.com/products')
  fetch(URL)


  useEffect(() => {
    requestJsonPlaceHolder()
    .then(res => res.json())
    .then(res => {
      setProducts(res)
      setIsLoading(false)
    })
    .catch(err => console.log(err))

    // getData().then(res => {
    //     setProducts(res)
    //     setIsLoading(false)
    //   });
  }, [])


  return (
      <navbar>
        <ItemList> 
          {
            isLoading? (<div>Cargando...</div>)
            : (products.map(producto => (
                <Item 
                  id={producto.id} 
                  imgUrl={producto.image}
                  nombre={producto.title} 
                  descripcion={producto.description} 
                  precio={producto.price}
                ></Item>
              ))
            )}
          {/* <h1>{count}</h1>
          <button onClick={() => increment()}>Sumar</button>
          <button onClick={() => decrement()}>Restar</button> */}
        </ItemList>
      </navbar>
  )
}
      export default App;
