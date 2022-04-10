import React from 'react';
import styled from 'styled-components';

const SuccessContainer = styled.div`
    margin: 0 0 4em 0;
`;
const SuccesContent = styled.div``;
const SuccesMapContainer = styled.div`
    margin: 10px 0 0 0;
`;

const Success = () => {
    return (
        <SuccessContainer>
            <SuccesContent>
                <h2>Name, Thanks for your parachuse</h2>
                <span> your items will arrive in 3 days to : dirrecion</span>
                <SuccesMapContainer>Google Maps</SuccesMapContainer>
            </SuccesContent>
        </SuccessContainer>
    );
};

export { Success };
