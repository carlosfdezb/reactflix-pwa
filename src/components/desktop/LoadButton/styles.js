import styled from 'styled-components';
import { movieCardAnim } from '../../../styles/Animation';
import { BASE_COLOR } from '../../../styles/DarkMode';

export const DivButton = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const ViewButton = styled.button`
  cursor: pointer;
  height: 60px;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;


  &:hover {
    -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    -moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
  }
`;

export const ShadowDiv = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,0.4514180672268907) 0%, rgba(0,0,0,0.45702030812324934) 100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const FixedDiv = styled.div`
  position: relative;
  z-index: 999999;
  height: 60vh;
  width: 50vw;
  border-radius: 1%;
  background-color: ${BASE_COLOR};
  animation: ${movieCardAnim} .5s ease;
  overflow-y: hidden;
`;

export const ScrollDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

export const ModalButton = styled.div`
    cursor: pointer;
    position: relative; 
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
