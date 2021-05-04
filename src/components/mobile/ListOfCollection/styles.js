import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    position: relative;
    margin-top: 20px;
    width: 100vw;
    padding-top: 1px;
    padding-bottom: 5px;
    ${(props) => props.image && css`
        {
            background-image: url(${props.image}),linear-gradient(180deg, rgba(16,15,16,1) 0%, rgba(16,15,16,0) 50%, rgba(16,15,16,1) 100%);
            background-blend-mode: color;
            background-size: 100% auto;   
            background-position: center top; 
        }
    `}
`;

export const GradientPosterTop = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: rgb(16,15,16);
background: linear-gradient(180deg, rgba(16,15,16,1) 0%, rgba(0,0,0,0) 100%);
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
