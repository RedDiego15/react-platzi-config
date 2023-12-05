import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';
import { AppContext } from '@context/AppContext';


const CheckOutItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0 0;
    border-bottom: 1px solid
        ${(props) => props.theme.CheckOutItem__element_border_bottom_color};
`;
const CheckOutElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap:.5rem;
    h4 {
        margin: 0;
    }
`;
const CheckOutElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 10px;
`;
const stylesDeleteIcon = {
    width: '20px',
    height: '20px',
};
const CheckOutItem = ({ item, title, price, quantity }) => {
    const {
        deletefromCart
    } = useContext(AppContext);
    return (
        <CheckOutItemContainer>
            <CheckOutElementContainer>
                <CheckOutElement>
                    <h4>{title}</h4>
                    <span>$ {price}</span>
                </CheckOutElement>
                <CheckOutElement>
                    <h4>Quantity: </h4>
                    <span>{quantity}</span>
                </CheckOutElement>
            </CheckOutElementContainer>

            <Button 
            type="button"
            onClick={() => deletefromCart(item)}
            >
                <MdDeleteOutline style={stylesDeleteIcon} />
            </Button>
        </CheckOutItemContainer>
    );
};

export { CheckOutItem };
