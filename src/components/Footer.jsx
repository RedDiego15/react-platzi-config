import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const FooterTitle = styled.p`
`
const  FooterCopy= styled.p`

`
const Footer = () => {
  return (
    <StyledFooter>
        <FooterTitle>Platzi conf footer</FooterTitle>
        <FooterCopy>Todos los derechos reservados</FooterCopy>
    </StyledFooter>
  )
}

export {Footer}