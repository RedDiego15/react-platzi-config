import React from 'react'
import styled from 'styled-components'
import {Header} from '@components/Header'
import { Footer } from '@components/Footer'
import { Theme } from '@styles/Theme'
const Main = styled.div`
  padding: 10px;
  grid-template-columns: minmax(auto, 768px);
  display: grid;
  justify-content: center;
  gap: 1rem;
`;

const Layout = ({children}) => {
  return (
     <Theme theme={"ligth"}>
      <Main>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Main>
     </Theme>
  );
}

export {Layout}