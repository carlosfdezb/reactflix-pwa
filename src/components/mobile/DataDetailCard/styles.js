import styled, { css } from 'styled-components';
import { BASE_COLOR } from '../../../styles/DarkMode';
import { movieCardAnim, PortraitAnim } from '../../../styles/Animation';

export const BackgroundDiv = styled.div`
    position: relative;
    top: 0;
    height: 50vh;
    width: 100%;
    ${(props) => props.img && css`
        {
            background-image: url(${props.img});
            background-repeat: no-repeat;
            background-size: 220% auto;     
            background-position: center top;    
            animation: ${PortraitAnim} 115s linear infinite alternate;
        }
    `}
`;

export const ImageGradient = styled.div`
    position: relative;
    height: 101%;
    width: 100%;
    background: ${BASE_COLOR};
    background: linear-gradient(0deg, ${BASE_COLOR} 0%, rgba(253,187,45,0) 100%);
`;

export const DataDiv = styled.div`
    width: 100%;
    padding: 20px;
    position: absolute;
`;
export const DataDivPadding = styled.div`
    transform: translateX(-20px);
`;

export const Logo = styled.img`
    width: 70vw;
    filter: drop-shadow(0 0 1px #ffffff);
    animation: ${movieCardAnim} .3s ease;
`;

export const NotLogo = styled.h1`
    font-size: 4em;
`;

export const SmallData = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    align-items: center;
    margin-right: 20px;
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

export const DivButton = styled.div`
    position: relative;
    margin-bottom: 20px;
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

export const RelatedCard = styled.div`
`;

export const AddButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    margin-right: 50px;
    margin-top: 14px;
`;

export const DelButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    margin-right: 55px;
    margin-top: 18px;
`;
