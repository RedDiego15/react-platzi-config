import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@context/AppContext';

const PaymentContainer = styled.div`
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 1.5em;
    display: grid;
`;
const PaymentContent = styled.div``;
const Button = styled.button``;
const PaymentButton = styled(Button)``;
const Payment = () => {
    const {
        state: { cart },
    } = useContext(AppContext);

    return (
        <PaymentContainer>
            <PaymentContent>
                <h3>Resume Order:</h3>
                {cart.map((product) => (
                    <CheckOutItem
                        quantity={product.quantity}
                        title={product.title}
                        price={product.price}
                        key={`Product-Payment-${product.id}`}
                    />
                ))}
                <PaymentButton>Pay with Paypal</PaymentButton>
            </PaymentContent>
        </PaymentContainer>
    );
};

export { Payment };
