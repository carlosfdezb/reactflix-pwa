import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR } from '../../../styles/DarkMode';
import { displaySerie } from '../../../styles/Animation';

export const OpenBox = styled.div`
    background-color: ${SECONDARY_COLOR};
    border-radius: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    
    animation: ${displaySerie} .3s ease;

    ${(props) => props.desktop === true && css`
        {
            width: 24vw;
            margin: 0.5vw;
        }
    `}
`;

export const CardBox = styled.div`
    width: 100%;
    position: relative;
    height: 200px;
    border-radius: 15px;
    background-color: ${SECONDARY_COLOR};
    margin-bottom: 15px;
    ${(props) => props.image && css`
        {
            background-image: url(${props.image});
            background-size: 100% auto;   
            background-position: center top; 
            background-repeat: no-repeat;
        }
    `}

    ${(props) => props.desktop === true && css`
        {
            width: 24vw;
            margin: 0.5vw;
        }
    `}
    
`;

export const BoxDiv = styled.div`
    position: absolute;
    border-radius: 0 0 15px 15px;
    bottom: 0;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5018382352941176) 35%, rgba(0,0,0,1) 100%);
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
    margin-bottom: 5px;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
`;

export const TitleDiv = styled.h1`
  font-size: 1.5em;
`;

export const BottomDiv = styled.div`
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: justify;
`;

export const ViewButton = styled.button`
  height: 40px;
  width: 90%;
  background-color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 5%;
  margin-right: 5%;
  -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
-moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
`;

export const NoteDiv = styled.div`
    width: 30px;
    height: 30px;
    padding: 2px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    ${(props) => props.color && css`
        {
            background-color: ${props.color};
        }
    `}
`;

export const NoteIn = styled.div`
    width: 22px;
    height: 22px;   
    padding: 5px;
    border-radius: 50px;
    background-color: ${BASE_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoteFont = styled.p`
    font-size: .7em;
`;

export const NoteBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 5px;
`;
