import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@context/AppContext';
import { Map } from '@components/Map';
const SuccessContainer = styled.div`
    margin: 0 0 4em 0;
`;
const SuccesContent = styled.div``;
const SuccesMapContainer = styled.div`
    margin: 10px 0 0 0;
`;

const Success = () => {
    const {
        state: {
            buyer: { name, direction, country },
        },
    } = useContext(AppContext);
    return (
        <SuccessContainer>
            <SuccesContent>
                <h2>{`${name}, Thanks for your parachuse`}</h2>
                <span>
                    your items will arrive in 3 days to :{country}: {direction}
                </span>
                <SuccesMapContainer>
                    <Map direction={direction} />
                </SuccesMapContainer>
            </SuccesContent>
        </SuccessContainer>
    );
};

export { Success };
