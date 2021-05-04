import styled from 'styled-components';
import { BASE_COLOR, HIGH_COLOR, TEXT_COLOR } from '../../../styles/DarkMode';
import { rotateLogo } from '../../../styles/Animation';

export const ContainerDiv = styled.div`
    position: relative;
`;

export const NavBox = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50px;
    z-index: 99999;
    display: flex;
    align-items: center;
    padding: 20px;
    padding-left: 30px;
    margin-top: 20px;
`;

export const NavBoxFix = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 90px;
    z-index: 99999;
    display: flex;
    align-items: center;
    background-color: ${BASE_COLOR};
    padding: 30px;
    padding-left: 30px;
`;

export const Content = styled.div`
    position: relative;
    padding-left: 50px;
`;

export const ItemDiv = styled.div`
    margin: 20px;
    display: flex;
`;

export const ItemInfo = styled.div`
    width: auto;
    position: absolute;
    border: 3px solid white;
    border-radius: 10px;
    background-color: ${BASE_COLOR};
    padding: 10px;
    margin-left: 50px;
    transform: translateY(-13px);

`;

export const LeftDivAnim = styled.div`
    position: relative;
    margin: 20px;
    display: flex;
    animation: ${rotateLogo} 10s infinite;
    animation-delay: 2s;
`;

export const RightSearch = styled.div`
    position: absolute;
    right: 0;
    margin-right: 30px;
`;
