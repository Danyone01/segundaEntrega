import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../../products';
import Item from '../../components/item/Item';

const ProductByCategory = () => {
  const { categoryId } = useParams();

  const filteredProducts = productos.filter((product) =>
    categoryId ? product.categoria === categoryId : true
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <Item
          key={product.id}
          image={product.urlImage}
          id={product.id}
          nombre={product.nombre}
          descripcion={product.descripcion}
        />
      ))}
    </div>
  );
};

export default ProductByCategory;