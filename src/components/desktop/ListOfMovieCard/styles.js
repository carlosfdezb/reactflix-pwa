import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    margin-bottom: 60px;
    position: relative;
    z-index: 999;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-left: 10px;
`;

export const Item = styled.div`
    margin-right: 8px;
`;

export const Title = styled.h2`
    font-size: 1.1vw;
    position: absolute;
    margin-bottom: 10px;
    transform: translateY(-35px);
`;
