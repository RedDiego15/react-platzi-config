import React from 'react';
import styled from 'styled-components';
import { CheckOutItem } from '@components/CheckOutItem';

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
    margin-top: 2rem;
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
    return (
        <InformationContainer>
            <InformationContent>
                <InformationHead>
                    <h2>Contact information</h2>
                </InformationHead>
                <FormContainer>
                    <Form action="">
                        <Input
                            type="text"
                            placeholder="Complete Name"
                            name="name"
                        />
                        <Input type="text" placeholder="Email" name="email" />
                        <Input
                            type="text"
                            placeholder="Direction"
                            name="direction"
                        />
                        <Input type="text" placeholder="apto" name="apto" />
                        <Input type="text" placeholder="City" name="city" />
                        <Input
                            type="text"
                            placeholder="Country"
                            name="country"
                        />
                        <Input type="text" placeholder="State" name="state" />
                        <Input
                            type="text"
                            placeholder="Postal Code"
                            name="cp"
                        />
                        <Input
                            type="text"
                            placeholder="Cellphone Number"
                            name="phone"
                        />
                    </Form>
                </FormContainer>
                <ButtonsContainer>
                    <BackButton>Back</BackButton>
                    <PayButton>Pay</PayButton>
                </ButtonsContainer>
            </InformationContent>
            <InformationSideBar>
                <h3>Order:</h3>
                <CheckOutItem />
            </InformationSideBar>
        </InformationContainer>
    );
};

export { Information };
