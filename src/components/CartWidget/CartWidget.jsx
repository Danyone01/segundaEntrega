import {BsFillCartDashFill} from 'react-icons/bs'
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';

const CartWidget = () =>    {
    const { cart } = useContext(CartCtx)

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
    return  (
        <div>
            <Badge badgeContent={totalQuantity} color="secondary">
                <BsFillCartDashFill size={30}/>
            </Badge>
            
        </div>
    )
}

export default CartWidget