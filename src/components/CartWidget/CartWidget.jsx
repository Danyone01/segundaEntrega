import {BsFillCartDashFill} from 'react-icons/bs'
import { Badge } from '@mui/material';

const CartWidget = () =>    {
    return  (
        <div>
            <Badge badgeContent={4} color="secondary">
                <BsFillCartDashFill size={30}/>
            </Badge>
            
        </div>
    )
}

export default CartWidget