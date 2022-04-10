import React from 'react';
import styled from 'styled-components';

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
    return (
        <PaymentContainer>
            <PaymentContent>
                <h3>Resume Order:</h3>
                <PaymentButton>Pay with Paypal</PaymentButton>
            </PaymentContent>
        </PaymentContainer>
    );
};

export { Payment };
