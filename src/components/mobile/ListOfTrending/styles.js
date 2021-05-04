import styled, { css } from 'styled-components';

export const ListDiv = styled.div`
    margin-top: 20px;
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
    margin-left: 40px;
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

export const FlexDiv = styled.div`
    display: flex;
    position: relative;
    ${(props) => props.position === 1 && css`
        {
            z-index: 999;
            
            
        }
    `}
    ${(props) => props.position === 2 && css`
        {
            z-index: 998;
            
            
        }
    `}
    ${(props) => props.position === 3 && css`
        {
            z-index: 997;
            
            
        }
    `}
    ${(props) => props.position === 4 && css`
        {
            z-index: 996;
            
            
        }
    `}
    ${(props) => props.position === 5 && css`
        {
            z-index: 995;
            
            
        }
    `}
    ${(props) => props.position === 6 && css`
        {
            z-index: 994;
            
            
        }
    `}
    ${(props) => props.position === 7 && css`
        {
            z-index: 993;
            
            
        }
    `}
    ${(props) => props.position === 8 && css`
        {
            z-index: 993;
            
            
        }
    `}
    ${(props) => props.position === 9 && css`
        {
            z-index: 992;
            
            
        }
    `}
    ${(props) => props.position === 10 && css`
        {
            z-index: 991;
            
            
        }
    `}

`;

export const AbsoluteDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(55px) translateX(-40px);
    ${(props) => props.ten === 10 && css`
        {
            transform: translateY(55px) translateX(-60px);
            
            
        }
    `}
`;

export const FontNumber = styled.h1`
    font-size: 7em;
    font-weight: bold;
    text-shadow: 1px 1px black;
    letter-spacing: -10px;
`;
