import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer'
import './styles.css'
const Navbar = () =>    {
    return (
        <div className="navbar">
            <ItemListContainer />
            <CartWidget/>
            
        </div>
    )
}

export default Navbar