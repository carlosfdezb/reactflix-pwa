import styled, { css } from 'styled-components';

export const BoxDiv = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-bottom: 70px;
`;

export const BackgroundDiv = styled.div`
    z-index: 999;
    position: absolute;
    right: 0;
    height: 100%;
    width: 65%;
    ${(props) => props.img && css`
        {
            background: linear-gradient(to left, rgba(16,15,16,0), rgba(16,15,16,1)), url(${props.img});
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: top center;
            
        }
    `}
`;

export const DataDiv = styled.div`
    z-index: 999;
    position: relative;
    left: 0;
    height: auto;
    width: 40%;
    padding-top: 100px;
`;

export const Logo = styled.img`
    z-index: 9999;
    max-height: 10vw;
    max-width: 20vw;
    filter: drop-shadow(0 0 1px #ffffff);
`;

export const NotLogo = styled.h1`
    font-size: 3vw;
`;

export const Description = styled.h3`
    margin-top: 1vh;
    color: #a1a1a1;
    font-size: 1vw;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Porcentaje = styled.h2`
    color: #57de6b;
    font-size: 1.1vw;
`;

export const Year = styled.h2`
    margin-left: 10px;
    color: #a1a1a1;
    font-size: 1.1vw;
`;

export const Type = styled.div`
    background-color: #737373;
    padding: 2px;
    border-radius: 5px;
    color: #e3e3e3;
    margin-left: 10px;
    border: 1px solid white; 
    font-size: 0.9vw;
`;

export const FlexDiv = styled.div`
    display: flex;
    margin-top: 1vh;
`;

export const ButtonDiv = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    margin-top: 1vh;
`;

export const FavButton = styled.div`
    width: 40px;
    height: 40px;background-color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    -moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    cursor: pointer;
`;
