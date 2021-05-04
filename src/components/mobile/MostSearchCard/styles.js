import styled from 'styled-components';
import { HEADER_COLOR } from '../../../styles/DarkMode';

export const BoxDiv = styled.div`
    width: 100vw;
    height: 70px;
    background-color: ${HEADER_COLOR};
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    height: 100%;
    border-radius: 5px;
`;

export const Title = styled.div`
    width: 50vw;
    margin-left: 10px;
    margin-right: 10px;
`;

