import styled, { css } from 'styled-components';
import { DesktopCard, DescriptionIn, DesktopCardImage } from '../../../styles/Animation';
import { BASE_COLOR } from '../../../styles/DarkMode';

export const CardDiv = styled.img`
    height: auto;
    width: 20vw;
    border-radius: 5px;
    &:hover{
        border: 2px solid white;
    }
    ${(props) => props.search === true && css`
        {   
            width: 13vw;
            height: auto;
            margin: 5px;
        }
    `}


`;

export const DetailDiv = styled.div`
    height: auto;
    width: 25vw;
    background-color: black;
    z-index: 9999;
    animation: ${DesktopCard} 1s ease;
    border-radius: 20px;
    border: 2px solid white;
`;

export const Container = styled.div`
    position: relative;
`;

export const BackgroundDiv = styled.img`
    width: 24.77vw;
    height: auto;
    animation: ${DesktopCardImage} 1s ease;
    border-radius: 17px 17px 0 0;
`;

export const InfoDiv = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    animation: ${DescriptionIn} 1s ease;
`;

export const Description = styled.p`
    margin-top: 10px;
    color: #a1a1a1;
    font-size: 1em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    margin-bottom: 10px;
    
`;

export const SmallData = styled.div`
    display: flex;
    margin-top: 5px;
    flex-wrap: wrap;
    margin-bottom: 5px;
    align-items: center;
`;

export const CircleDiv = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

export const GenreFont = styled.p`
    font-size: .9em;
`;

export const NoteDiv = styled.div`
    width: 30px;
    height: 30px;
    padding: 2px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.color && css`
        {
            background-color: ${props.color};
        }
    `}
    margin-right: 10px;
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

export const ButtonDiv = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: -10px;
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
