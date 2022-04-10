import React from 'react'
import styled from 'styled-components'
import {Product} from '@components/Product'
const ProductsContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;
const ProductsItems = styled.div`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  position: relative;
`;
const Products = ({products}) => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductsItems>
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            key={`Products-${product.id}`}
          />
        </ProductsItems>
      ))}
    </ProductsContainer>
  );
}

export {Products}