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
const ButtonPass = styled.button`
    background-color: white;
    border: 2px solid grey;
    outline: none;
    padding: 10px;
    cursor: pointer;
`;
const ContainerPaypalButtons = styled.div`
    margin-top: 0.5rem;
`;

const CLIENT_ID_PAYPAL = process.env.APIKEY_PAYPAL;

const Payment = () => {
    const paypalOptions = {
        clientId: CLIENT_ID_PAYPAL,
        intent: 'capture',
        currency: 'USD',
    };
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
            console.log('Uncomplete payment request');
        }
    };
    const handleWithoutPay = () => {
        navigate('/checkout/success');
    };

    return (
        <PaymentContainer>
            <PaymentContent>
                <h3>Resume Order:</h3>
                {cart.map((product) => (
                    <CheckOutItem
                        item={product}
                        quantity={product.quantity}
                        title={product.title}
                        price={product.price}
                        key={`Product-Payment-${product.id}`}
                    />
                ))}
                <ContainerPaypalButtons>
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={getTotalOrderPrice()}
                        onPaymentStart={() => console.log('Start payment')}
                        onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                        onPaymentError={(error) => console.log(error)}
                        onPaymentCancel={(data) => console.log(data)}
                    />
                </ContainerPaypalButtons>

                <ButtonPass type="button" onClick={handleWithoutPay}>
                    Pass simulate already pay
                </ButtonPass>
            </PaymentContent>
        </PaymentContainer>
    );
};

export { Payment };
