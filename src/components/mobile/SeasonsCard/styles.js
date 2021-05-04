import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../../styles/DarkMode';
import { displaySerie } from '../../../styles/Animation';

export const CardBox = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    border-radius: 15px;
    background-color: ${SECONDARY_COLOR};
    margin-bottom: 15px;
    padding: 10px;
    
`;

export const OpenBox = styled.div`
    background-color: ${SECONDARY_COLOR};
    border-radius: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    
`;

export const BoxDiv = styled.div`
    display: flex;

`;

export const Image = styled.img`
    height: 100%;
    width: 120px;
    border-radius: 15px;
`;

export const DataDiv = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 20px;
`;

export const TitleDiv = styled.h1`
  font-size: 1.5em;
`;

export const BottomDiv = styled.div`
    margin: 10px;
    text-align: justify;
    animation: ${displaySerie} .3s ease;
`;

export const ViewButton = styled.button`
  height: 40px;
  width: 98%;
  background-color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 1%;
  margin-right: 1%;
  -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
-moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
`;
