import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '@styles/GlobalStyles'
import React from 'react';

const themes = {
    ligth:{
        background_color: '#3c484e14',
        CheckOutItem__element_border_bottom_color:'#80808042'
    },
    dark: {

    }
};

export const Theme = (props) =>(
    <ThemeProvider theme = {themes[props.theme]}>
        <GlobalStyles/>
        {props.children}
    </ThemeProvider>
)