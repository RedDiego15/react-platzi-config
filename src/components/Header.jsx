import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h1`
    cursor: pointer;
    color: #33b1ff;
`;
const HeaderCheckout = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 30px;
    margin: 0 0 0 0.5em;
`;
const iconStyle = {
    width: '30px',
    height: '30px',
    color: '#33b1ff',
};
const Header = () => {
    return (
        <HeaderContainer>
            <Link to="home">
                <Title>Platzi config</Title>
            </Link>
            <HeaderCheckout>
                <Link to="/checkout">
                    <HiOutlineShoppingBag style={iconStyle} />
                </Link>
            </HeaderCheckout>
        </HeaderContainer>
    );
};

export { Header };
