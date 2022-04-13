import React from 'react';
import { Products } from '@components/Products';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Platzi Conf Mer - Products </title>
            </Helmet>
            <Products></Products>;
        </>
    );
};

export { Home };
