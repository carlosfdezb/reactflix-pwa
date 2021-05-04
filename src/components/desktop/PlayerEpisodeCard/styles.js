import styled from 'styled-components';

export const Landscape = styled.div`
    margin-top: 80px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 90vw;
    
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5%;
    margin-right: 5%;
`;

export const ButtonChange = styled.button`
    height: 40px;
    background-color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
-moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
`;

export const PlayerContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 85vh;
`;
