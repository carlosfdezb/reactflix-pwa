import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    width: 100vw;
    margin-top: 120px;
    position: absolute;
`;

export const List = styled.ul`
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-y: hidden;
`;

export const Item = styled.li`
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    margin: 10px;
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
