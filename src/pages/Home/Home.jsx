import {Link, useNavigate} from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import Item from '../../components/item/Item';
import ItemList from '../../components/itemList/ItemList'
import {productos} from '../../products'
import { useContext, useEffect, useState } from 'react';
import { CartCtx } from '../../context/CartContext';
import { DotSpinner } from "@uiball/loaders"
import './styles.css'
import ProductByCategory from '../Categories';

const Home = () =>  {
    const [isLoading, setIsLoading] = useState(true)
    const {listProducts, setListProducts} = useContext(CartCtx)
    const navigate = useNavigate()
    const categories = Array.from(new Set(productos.map((product) => product.categoria)))
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value
        if (selectedCategory) {
            navigate(`/categories/${selectedCategory}`)
        }else{
            navigate(`/`)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setListProducts(productos);
            setIsLoading(false)
        }, 1000)       
    }, []);
    if (isLoading) {
        return <DotSpinner />;
            // <p>Cargando...</p>
        }

    return (
        <Layout>
            <div className='category-dropdown'>
                <select onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                    {category}
                    </option>
                ))}
                </select>
            </div>

            <ItemList>
                <div className='product-list'>
                    {productos.map((prod) => (
                        <div key={prod.id} className='product-item'>
                            <Item 
                                image={prod.urlImage}
                                id={prod.id}
                                nombre={prod.nombre}
                                descripcion={prod.descripcion}
                            />
                        </div>  
                    ))}
                </div>
            </ItemList>
        </Layout>
    )
}

export default Home

