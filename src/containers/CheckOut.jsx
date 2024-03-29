import React, { useContext } from 'react';
import styled from 'styled-components';
import { CheckOutItem } from '@components/CheckOutItem';
import { Link } from 'react-router-dom';
import { AppContext } from '@context/AppContext';

const CheckOutContainer = styled.div`
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 1.5em;
    display: grid;
    padding: 0 0 4em 0;
`;
const CheckOutContent = styled.div``;
const Title = styled.h2``;
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const ButtonSideBar = styled.button`
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color: #63b8ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
    display: block;
    outline: none;
`;

const CheckOut = () => {
    const {
        state: { cart },
        getTotalOrderPrice,
    } = useContext(AppContext);

    return (
        <CheckOutContainer>
            <CheckOutContent>
                <Title>Order List</Title>
                {cart.map((product) => (
                    <CheckOutItem
                        item={product}
                        quantity={product.quantity}
                        title={product.title}
                        price={product.price}
                        key={`Product-${product.id}`}
                    />
                ))}
            </CheckOutContent>
            <SideBar>
                <h3>Total Price: ${getTotalOrderPrice()}</h3>
                <Link to="/checkout/information">
                    <ButtonSideBar>Continue Order</ButtonSideBar>
                </Link>
            </SideBar>
        </CheckOutContainer>
    );
};

export { CheckOut };
