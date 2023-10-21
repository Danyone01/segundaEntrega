import{useParams, Link} from 'react-router-dom'
import{useContext, useEffect, useState} from 'react'
import { productos } from '../../products';
import Layout from '../../components/Layout/Layout';
import { CartCtx } from '../../context/CartContext';
import './styles.css'

const ItemDetail = () =>    {
   const { idProduct } = useParams()
   const [product, setProduct] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const { addToCart } = useContext(CartCtx)
/** */
   const [quantity, setQuantity] = useState(1)


   const searchProduct = productos.find((prod) => prod.id === parseInt(idProduct));
   
   useEffect(() =>{
        setTimeout(() =>{
            // console.log(searchProduct)
            setProduct(searchProduct)
            setIsLoading(false)
        }, 1000)
   }, [])

   const HandleaddToCart = () =>  {
        addToCart(product.id, quantity)
   }

    return (
        <Layout>
            {isLoading  ? (
                <p>Cargando...</p>
            ) : ( 
                <>
                    <div className='product-detail'>
                        <img src={product.urlImage} alt="Imagen del producto" />
                        <div className='product-info'>
                            <h1>{product.nombre}</h1>
                            <p>{product.descripcion}</p>
                            <p>Precio: ${product.precio.toFixed(2)}</p>
                            <label htmlFor="quantity">Cantidad:</label>
                            <input type='number' id='quantity' name='quantity' value={quantity} min='1' onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                            />
                            <button onClick={HandleaddToCart}>Añadir al carrito</button>
                        </div>
                    </div>        
                    <h3>
                        ir a <Link to={'/'}>Home</Link>
                    </h3>
                 </> 
            ) }
        </Layout>
     );
};

export default ItemDetail

