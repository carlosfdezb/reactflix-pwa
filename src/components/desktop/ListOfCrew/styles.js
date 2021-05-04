import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    position: relative;
    width: 100%;
    margin-top: 10px;
`;

export const List = styled.ul`
    padding-left: 0;
    display: flex;
    overflow: hidden;
    width: auto;
    margin-left: 10px;
`;

export const Item = styled.div`
    margin-right: 8px;
`;

export const Title = styled.h2`
    font-size: 1.1vw;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const FlexButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MoreCast = styled.button`
    height: 40px;
    width: 200px;
    margin: 10px;
    background-color: white;
    border-radius: 3px;
    -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    -moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
`;
