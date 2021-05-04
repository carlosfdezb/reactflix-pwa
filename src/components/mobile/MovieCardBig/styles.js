import styled, { css } from 'styled-components';

export const MovieDiv = styled.div`
    position: relative;
    height: 300px;
    width: 160px;
    border-radius: 5px;
    ${(props) => props.img && css`
        {
            background-image: url(${props.img});
            background-repeat: no-repeat;
            background-size: 280% 100%;
            background-position: center top;
            
        }
    `}
`;

export const ImageGradient = styled.div`
    position: relative;
    height: 300px;
    width: 160px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.15449929971988796) 35%, rgba(0,0,0,1) 100%);
    background-size: auto 100%;
`;

export const Logo = styled.img`
    position: absolute;
    width: 140px;
    z-index: 998;
    bottom: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    
    filter: drop-shadow(0 0 2px #ffffff);
`;
