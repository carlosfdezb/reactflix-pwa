import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    margin-top: 145px;
    margin-bottom: 15px;
`;

export const List = styled.ul`
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-y: hidden;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    padding: 0 ;
`;

export const Emptydiv = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
