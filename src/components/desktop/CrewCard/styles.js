import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../../styles/DarkMode';

export const CrewBox = styled.div`
    width: 110px;
    height: auto; 
    margin: 5px;
    background-color: ${SECONDARY_COLOR};
    border-radius: 0 0 5px 5px ;
    padding-bottom: 10px;
`;

export const Image = styled.img`
    width: 100%;
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
