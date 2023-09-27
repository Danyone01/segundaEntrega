
const ItemList = ({children}) =>  {
    return (
        <div 
            style={{
                padding: "10px 25px",
                display:"flex", 
                justifyContent: "spacebetween", 
                alignItems:"center",
                flexWrap:"wrap"
            }}
        >
        {children}
        </div>
    )
}

export default ItemList