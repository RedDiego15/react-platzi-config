import InitialState from '../InitialState';
import React from 'react';
import { useState } from 'react';
import { useMap } from 'react-use';

const useInitialState = () => {
    const [state, { set, setAll, remove, reset }] = useMap(InitialState);

    const findItem = (item) => {
        return state.cart.filter((product) => item.id === product.id)[0];
    };
    
    const findItemIndex = (item) => {
        return state.cart.findIndex((product) => item.id === product.id);
    };

    const addToCart = (payload) => {
        const item = findItem(payload);
        if (item && item.quantity < 10) {
            item.quantity = item.quantity + 1;
            item.totalPrice = item.price * item.quantity;
            state.cart = [...state.cart];
        } else if (item && item.quantity === 10) {
            alert('cant buy more than 10');
        } else {
            payload.quantity = 1;
            payload.totalPrice = payload.price;
            state.cart = [...state.cart, payload];
        }
        setAll({ ...state });
    };
    
    const deletefromCart = (payload) => {
        const index = findItemIndex(payload);
        state.cart.splice(index, 1);
        setAll({ ...state });
    };
    const getTotalOrderPrice = () => {
        return state.cart.reduce(
            (prev, actual) => prev + actual.quantity * actual.price,
            0
        );
    };
    const addBuyer = (payload) => {
        set('buyer', payload);
    };
    const addNewOrder = (payload) => {
        set('order', payload);
    };

    return {
        state,
        addToCart,
        deletefromCart,
        getTotalOrderPrice,
        addBuyer,
        addNewOrder,
    };
};

export { useInitialState };
