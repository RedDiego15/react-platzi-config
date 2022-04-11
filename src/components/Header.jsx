import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AppContext } from '@context/AppContext';
import { useContext } from 'react';

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
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 30px;
    margin: 0 0 0 0.5em;
`;
const NumberOfItems = styled.span`
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    text-align: center;
`;
const StyledLink = styled(Link)`
    position: relative;
    display: flex;
`;
const iconStyle = {
    width: '34px',
    height: '34px',
    color: '#33b1ff',
};
const Header = () => {
    const {
        state: { cart },
    } = useContext(AppContext);
    const totalItems = cart.reduce((prev, actual) => prev + actual.quantity, 0);

    return (
        <HeaderContainer>
            <Link to="home">
                <Title>Platzi config</Title>
            </Link>
            <HeaderCheckout>
                <StyledLink to="/checkout">
                    <HiOutlineShoppingBag style={iconStyle} />
                    {totalItems < 10 && totalItems > 0 && (
                        <NumberOfItems>{totalItems}</NumberOfItems>
                    )}
                    {totalItems > 9 && <NumberOfItems>9+</NumberOfItems>}
                </StyledLink>
            </HeaderCheckout>
        </HeaderContainer>
    );
};

export { Header };
