import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer'
import './styles.css'
import { Link } from "react-router-dom"


const Navbar = () =>    {

    return (
        <div className="navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/'}> <h1> LOGO </h1> </Link>
            <ItemListContainer />
            <Link to={'/cart'}>
                <CartWidget/>
            </Link>
        </div>
    )
}

export default Navbar