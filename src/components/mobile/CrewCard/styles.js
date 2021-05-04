import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../../styles/DarkMode';

export const CrewBox = styled.div`
    width: 23vw;
    height: 100%;
    margin: 1vw;
    background-color: ${SECONDARY_COLOR};
    border-radius: 0 0 5px 5px ;
`;

export const Image = styled.img`
    width: 23vw;
    height: auto;
`;

export const InfoDiv = styled.div`
    padding: 2px;
    display: grid;
    place-items: center;
`;

export const CharacterDiv = styled.p`
    font-size: .8em;
    text-align: center;
`;

export const ActorDiv = styled.p`
    font-size: .7em;
    color: gray;
    text-align: center;
`;
