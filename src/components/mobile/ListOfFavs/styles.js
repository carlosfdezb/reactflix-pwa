import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    width: 100vw;
    margin-top: 80px;
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
`;

export const Emptydiv = styled.div`
    position: absolute;
    top: 0;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
