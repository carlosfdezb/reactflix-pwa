import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    margin-top: 20px;
    position: relative;
    
    z-index: 999;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  overflow: scroll;
  width: 100%;
  overflow-y: hidden;
  margin-left: 10px;
`;

export const Item = styled.li`
    margin-right: 8px;
`;

export const Title = styled.h4`
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const GradientDiv = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    height: 100%;
    z-index: 99999;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,0.4514180672268907) 0%, rgba(0,0,0,0.45702030812324934) 100%);
`;
