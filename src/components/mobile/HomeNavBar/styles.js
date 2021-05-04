import styled, { css, keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { BASE_COLOR } from '../../../styles/DarkMode';
import { rotateLogo } from '../../../styles/Animation';

export const NormalDiv = styled.div`
    position: relative;
    z-index: 9999;
`;

export const NormalNav = styled.nav`
    width: 100%;
    height: auto;
    z-index: 9999;
    display: flex;
    position: absolute;
    margin-top: 50px;
    justify-content: center;
`;

export const TopNav = styled.div`
    width: 100%;
    height: auto;
    z-index: 9999;
    display: flex;
    position: absolute;
    justify-content: center;
`;

export const LeftDiv = styled.div`
    position: absolute;
    left: 0;
    margin: 20px;
    display: flex;
`;

export const LeftDivAnim = styled.div`
    position: absolute;
    left: 0;
    margin: 20px;
    display: flex;
    animation: ${rotateLogo} 10s infinite;
    animation-delay: 2s;
`;

export const LeftDivGenre = styled.div`
    position: absolute;
    left: 0;
    margin-left: 30px;
    display: flex;
`;

export const RightDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
`;

export const Shadow = styled.h1`
    text-shadow: 2px 2px #ff0000;
`;

const slide = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FixedNav = styled.nav`
    width: 100%;
    height: auto;
    z-index: 9999;
    position: fixed;
    display: flex;
    top: 0;
    justify-content: space-around;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,0.577468487394958) 0%, rgba(0,0,0,0.577468487394958) 100%);
    animation: ${slide} .5s ease;
`;

export const ItemNavText = styled.h4`
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const BackNav = styled.div`
    width: 100%;
    height: auto;
    z-index: 99999;
    position: fixed;
    top: 0;
    display: flex;
`;

export const LeftDivShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0;
    padding: 20px;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,0.577468487394958) 0%, rgba(0,0,0,0.577468487394958) 100%);
    animation: ${slide} .5s ease;
`;

export const LinkTo = styled(LinkRouter)`
    align-items:center;
    color: white;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    &[aria-current] {
        color: #888;

        &:after {
            color: #888;
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 100px;
            line-height: 15px;
        }
    }
`;

export const TitlePage = styled.h3`
    margin-left: 30px;
`;
