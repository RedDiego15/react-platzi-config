import React from 'react';
import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';

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
const CheckOutItem = ({ title, price, quantity }) => {
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

            <Button type="button">
                <MdDeleteOutline style={stylesDeleteIcon} />
            </Button>
        </CheckOutItemContainer>
    );
};

export { CheckOutItem };
