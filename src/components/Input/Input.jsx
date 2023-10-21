const Input = ({capturarValor}) => {

    return(
        <input 
            onChange={(event)=> capturarValor(event.target.value)}
       />
    )
} 

export default Input