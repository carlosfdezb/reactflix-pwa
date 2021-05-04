import styled, { keyframes } from 'styled-components';
import { SECONDARY_COLOR } from '../../../styles/DarkMode';

const swipe = keyframes`
  from {
    transform: translateY(1000px);
  }

  to {
    transform: translateY(0);
  }
`;

export const CardDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 99999;
    background-color: ${SECONDARY_COLOR};
    animation: ${swipe} .5s ease;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 20px;
`;

export const FlexDiv = styled.div`  
  display: flex;
  width: auto;
  height: auto;
`;

export const Image = styled.img`
  position: relative;
  width: 35vw;
  height: auto;
  border-radius: 5px;
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 35vw;
  height: auto;
  margin-right: 5px;
`;

export const InfoDiv = styled.div`
  position: relative;
  margin-left: 10px;
  width: 62%;
`;

export const TitleDiv = styled.h1`
  font-size: 1.1em;
`;

export const DivButton = styled.div`
    position: relative;
`;

export const ViewButton = styled.button`
    height: 40px;
    width: 100%;
    background-color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PlayFont = styled.p`
    font-weight: bold;
`;

export const FooterFlex = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
`;

export const FooterFont = styled.p`
  margin-left: 10px;
`;

export const SmallDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1px;
  margin-bottom: -1px;
`;

export const SmallDot = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 3px;
  display: flex;
`;

export const ArrowDiv = styled.div`
  position: absolute;
  right: 0;
`;

export const GenreFont = styled.p`
  font-size: .7em;
  color: silver;
`;

export const DescriptionP = styled.p`
display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;
