import styled from 'styled-components';

export const AbsoluteBox = styled.div`
`;

export const FlexBox = styled.div`
    position: fixed;
    top: 0;
    margin-left: 465px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    z-index: 999999;
    cursor: pointer;
`;

export const ModalBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,0.7791491596638656) 0%, rgba(0,0,0,1) 100%);
    display: grid;
    justify-items: center;
    align-items: center;
    z-index: 99999;
`;

export const ModalButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const DataDiv = styled.div`
`;
