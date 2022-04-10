import React from 'react'
import styled from 'styled-components'

const CheckOutItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
`;
const CheckOutElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.CheckOutItem__element_border_bottom_color};
  
  h4 {
    margin:0
  }
`;
const Button = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 10px;
`;
const CheckOutItem = () => {
  return (
      <CheckOutItemContainer>
          <CheckOutElement>
              <h4>Item Name</h4>
              <span>$10</span>
          </CheckOutElement>
          <Button type="button">Delete</Button>
      </CheckOutItemContainer>
    
  )
}

export {CheckOutItem}