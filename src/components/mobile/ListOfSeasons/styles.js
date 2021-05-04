import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    width: 100vw;
    margin-top: 80px;
    position: absolute;
    ${(props) => props.desktop === true && css`
        {
            width: 100%;
            margin-top: 10px;
            verflow-y: scroll;
        }
    `}
`;

export const List = styled.ul`
    display: grid;
    transform: translateX(-20px);
`;

export const Item = styled.li`
`;
