import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckOut } from '@containers/CheckOut';
import { Information } from '@containers/Information';
import { Success } from '@containers/Success';
import { NotFound } from '@containers/NotFound';
import { Home } from '@containers/Home';
import { Payment } from '@containers/Payment';
import { Layout } from '@components/Layout';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';

function App() {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/checkout" element={<CheckOut />} />
                        <Route
                            exact
                            path="/checkout/information"
                            element={<Information />}
                        />
                        <Route
                            exact
                            path="/checkout/payment"
                            element={<Payment />}
                        />
                        <Route
                            exact
                            path="/checkout/success"
                            element={<Success />}
                        />
                        <Route exact path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };
