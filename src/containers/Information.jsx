import React, { useContext } from 'react';
import styled from 'styled-components';
import { CheckOutItem } from '@components/CheckOutItem';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import { useForm } from 'react-hook-form';

const InformationContainer = styled.div`
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 1.5em;
    display: grid;
    margin: 0 0 4em 0;
`;
const InformationContent = styled.div``;
const InformationHead = styled.div`
    h2 {
        margin: 0 0 8px 0;
        padding: 0;
    }
`;
const FormContainer = styled.div``;
const Form = styled.form``;
const Input = styled.input`
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: 'tnum';
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    list-style: none;
    margin: 0 0 8px 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
    box-sizing: border-box;
`;
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;
const Button = styled.button`
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background-color: #63b8ee;

    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
    display: block;
    outline: none;
`;
const PayButton = styled(Button)`
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    max-width: 20rem;
`;
const BackButton = styled(Button)`
    background-color: #a5c2d5b3;
    border: none;
    width: fit-content;
`;
const InformationSideBar = styled.div`
    margin: 10px 0 0 0;
    h3 {
        font-size: 18px;
        margin: 0 0 8px 0;
        padding: 0;
    }
`;

const Information = () => {
    const {
        state: { cart },
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        navigate('/checkout/payment');
    };
    return (
        <InformationContainer onSubmit={handleSubmit(onSubmit)}>
            <InformationContent>
                <InformationHead>
                    <h2>Contact information</h2>
                </InformationHead>
                <FormContainer>
                    <Form action="">
                        <Input
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Complete Name"
                            name="name"
                        />
                        {errors.name && <span>This field is required</span>}
                        <Input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder="Email"
                            name="email"
                        />
                        {errors.email && <span>This field is required</span>}
                        <Input
                            {...register('direction', { required: true })}
                            type="text"
                            placeholder="Direction"
                            name="direction"
                        />
                        {errors.direction && (
                            <span>This field is required</span>
                        )}
                        <Input
                            {...register('apto')}
                            type="text"
                            rue
                            placeholder="apto"
                            name="apto"
                        />

                        <Input
                            {...register('city', { required: true })}
                            type="text"
                            placeholder="City"
                            name="city"
                        />
                        {errors.city && <span>This field is required</span>}
                        <Input
                            {...register('country', { required: true })}
                            type="text"
                            placeholder="Country"
                            name="country"
                        />
                        {errors.country && <span>This field is required</span>}
                        <Input
                            {...register('state', { required: true })}
                            type="text"
                            placeholder="State"
                            name="state"
                        />
                        {errors.state && <span>This field is required</span>}
                        <Input
                            {...register('postal_code', { required: true })}
                            type="text"
                            placeholder="Postal Code"
                            name="postal_code"
                        />
                        {errors.postal_code && (
                            <span>This field is required</span>
                        )}
                        <Input
                            {...register('phone', { required: true })}
                            type="text"
                            placeholder="Cellphone Number"
                            name="phone"
                        />
                        {errors.phone && <span>This field is required</span>}
                        <ButtonsContainer>
                            <Link to="/checkout">
                                <BackButton type="button">Back</BackButton>
                            </Link>

                            <PayButton type="submit">Pay</PayButton>
                        </ButtonsContainer>
                    </Form>
                </FormContainer>
            </InformationContent>
            <InformationSideBar>
                <h3>Order:</h3>
                {cart.map((product) => (
                    <CheckOutItem
                        quantity={product.quantity}
                        title={product.title}
                        price={product.price}
                        key={`Product-checkOut${product.id}`}
                    />
                ))}
            </InformationSideBar>
        </InformationContainer>
    );
};

export { Information };
