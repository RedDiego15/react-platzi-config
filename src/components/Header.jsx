import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
  cursor: pointer;
  color: #33b1ff;

`
const HeaderCheckout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 30px;
  margin: 0 0 0 0.5em;
`
const Header = () => {
  return (
    <HeaderContainer>
        <Title>Platzi config</Title>
        <HeaderCheckout>
            CheckOut
        </HeaderCheckout>

    </HeaderContainer>
  )
}

export {Header}