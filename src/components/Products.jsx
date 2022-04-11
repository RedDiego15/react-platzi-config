import React, { useContext } from 'react';
import styled from 'styled-components';
import { Product } from '@components/Product';
import { AppContext } from '@context/AppContext';

const ProductsContainer = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    grid-row-gap: 1.5em;
    display: grid;
`;

const Products = () => {
    const {
        state: { products },
    } = useContext(AppContext);

    return (
        <ProductsContainer>
            {products.map((product) => (
                <Product
                    item={product}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    key={`Products-${product.id}`}
                />
            ))}
        </ProductsContainer>
    );
};

export { Products };
