import styled, { css } from 'styled-components';
import { BASE_COLOR } from '../../../styles/DarkMode';
import { PortraitAnim } from '../../../styles/Animation';

export const Div = styled.div`
    height: auto;
`;

export const BoxDiv = styled.div`
    position: relative;
    height: auto;
`;

export const ImageBackground = styled.div`
    position: relative;
    width: 100vw;
    height: 60vh;

    ${(props) => props.img && css`
        {
            background-image: url(${props.img});
            background-repeat: no-repeat;
            background-size: 250% auto;
            background-position: center center;
            animation: ${PortraitAnim} 150s linear infinite alternate;
            
        }
    `}
    
`;

export const ImageGradient = styled.div`
    position: relative;
    width: 100vw;
    height: 101%;
    background: ${BASE_COLOR};
    background: linear-gradient(0deg, ${BASE_COLOR} 0%, rgba(253,187,45,0) 100%);
    background-size: 290% auto;
`;

export const Logo = styled.img`
    position: relative;
    width: 50vw;
    z-index: 999;
    
    filter: drop-shadow(0 0 1px #ffffff);
    transform: translateX(50%) translateY(-20%);
`;

export const Footer = styled.div`   
    height: 40px;
    position: relative;
    margin-top: 10px;
    
    display: flex;
`;

export const DivButton = styled.div`
    margin: 0;
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export const ViewButton = styled.button`
    height: 35px;
    width: 130px;
    background-color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PlayFont = styled.p`
    font-weight: bold;
`;

export const AddDiv = styled.div`
    margin: 0;
    position: absolute;
    text-align: center;
    top: 15%;
    left: 10%;
    -ms-transform: translate(25%, -25%);
    transform: translate(25%, -25%);
    justify-content: center;
`;

export const InfoDiv = styled.div`
    margin: 0;
    position: absolute;
    text-align: center;
    top: 15%;
    right: 7%;
    -ms-transform: translate(-25%, -25%);
    transform: translate(-25%, -25%);
    justify-content: center;
`;

export const ButtonFont = styled.p`
    font-size: .7em;
`;

export const NotLogo = styled.h1`
    text-align: center;
    font-size: 3em;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
    z-index: 999;
`;

export const GradientDiv = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    height: 100%;
    z-index: 99999;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,0.4514180672268907) 0%, rgba(0,0,0,0.45702030812324934) 100%);
`;
