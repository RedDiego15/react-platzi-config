import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`

`
const ProductInfo = styled.div`
  padding: 10px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  span{
    color: #33b13a;
  }
  p{
    font-size: 14px;
    font-weight: 300;
  }
`;
const Button = styled.button`
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  width: 100%;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  border: 0px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  :hover{
    background-color: rgba(39,44,49,0.06);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0 0;
  object-fit: contain;
`;

const Product = ({image,title,price,description}) => {
  return (
    <ProductContainer>
      <StyledImg src={image} alt={title} />
      <ProductInfo>
          <h2>{title}
        <span>$ {price}</span>
          </h2>
          <p>{description}</p>
      </ProductInfo>
      <Button type = "button">
          Buy
      </Button>

    </ProductContainer>
  );
}

export {Product}