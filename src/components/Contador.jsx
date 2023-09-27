import { useState } from "react"
const Contador = () =>  {
    const [count, setCount] = useState(1)
    const handCount = () => setCount(count + 1)
    return  (
        <div> 
            {numero}
            <hr />
            <button onClick={handCount}>Sumar</button>
        </div>
    )
}
 
export default Contador