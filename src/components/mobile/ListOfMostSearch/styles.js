import styled from 'styled-components';

export const ListDiv = styled.div`
    width: 100vw;
    margin-top: 150px;
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
    margin-bottom: 3px;
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

export const LabelDiv = styled.div`
    position: relative;
    display: flex;
    background-color: #2A2A2B;
    width: 100%;
    height: 30px;
    padding: 10px;
    margin-bottom: 10px;
`;

