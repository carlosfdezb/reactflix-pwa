import styled, { css } from 'styled-components';
import { movieCardAnim } from '../../../styles/Animation';

export const MovieDiv = styled.img`
    position: relative;
    height: 150px;
    width: 100px;
    border-radius: 5px;
    animation: ${movieCardAnim} .5s ease;
    
    ${(props) => props.search === true && css`
        {
            width: 31.3vw;
            height: auto;
            margin: 1vw        
        }
    `}

    ${(props) => props.desktopSize === true && css`
        {
            width: 150px;
            height: 210px;     
        }
    `}

`;
