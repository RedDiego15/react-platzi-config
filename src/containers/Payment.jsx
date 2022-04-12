import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { CheckOutItem } from '@components/CheckOutItem';
import { useNavigate } from 'react-router-dom';

const PaymentContainer = styled.div`
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 1.5em;
    display: grid;
`;
const PaymentContent = styled.div``;

const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
};

const CLIENT_ID_PAYPAL = process.env.APIKEY_PAYPAL;

const Payment = () => {
    const paypalOptions = {
        clientId: CLIENT_ID_PAYPAL,
        intent: 'capture',
        currency: 'USD',
    };
    debugger;
    const {
        state: { cart },
        buyer,
        getTotalOrderPrice,
        addNewOrder,
    } = useContext(AppContext);
    const navigate = useNavigate();

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data,
            };
            addNewOrder(newOrder);
            navigate('/checkout/success');
        } else {
            console.log('no se completo');
        }
    };

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

                <PayPalButton
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={getTotalOrderPrice()}
                    onPaymentStart={() => console.log('Start payment')}
                    onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                    onPaymentError={(error) => console.log(error)}
                    onPaymentCancel={(data) => console.log(data)}
                />
            </PaymentContent>
        </PaymentContainer>
    );
};

export { Payment };
