import styled from 'styled-components';

export const BackgroundImg = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    left:0;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size:  auto 150%;
    background-position: top center;
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(190deg) saturate(140%);
`;

export const DataDiv = styled.div`
    position: absolute;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 130px;
    color: white;
    width: 40vw;
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Logo = styled.img`
    max-width: 35vw;
    max-height: 35vh;
`;

export const NotLogo = styled.h1`
    font-size: 4.5em;
    max-width: 40vw;
`;

export const Porcentaje = styled.h2`
    color: #57de6b;
    font-size: 1.1vw;
`;

export const Year = styled.h2`
    margin-left: 10px;
    color: #a1a1a1;
    font-size: 1vw;
`;

export const FlexDiv = styled.div`
    display: flex;
    margin-top: 1vh;
    align-items: center;
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

export const CircleDiv = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

export const DescriptionDiv = styled.div`
    margin-top: 25px;
    margin-bottom: 40px;
`;

export const RightDiv = styled.div`
    position: absolute;
    width: 30vw;
    top: 0;
    right: 0;
    margin-right: 100px;
    padding-top: 50px;
    height: 100vh;

`;
export const ButtonDiv = styled.div`
    position: absolute;
    width: 30vw;
    bottom: 0;
    right: 0;
    margin-bottom: 50px;

`;

export const Subtitle = styled.h2`
    color: #a1a1a1;
    font-size: 1vw;
    font-style: italic;
    margin-top: 10px;
    text-align: center;
`;

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const FavButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 999999;
    cursor: pointer;
`;
