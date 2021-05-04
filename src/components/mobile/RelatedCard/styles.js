import styled from 'styled-components';

export const HeaderDiv = styled.div`
  width: 100%;
  background-color: black;
  top: 0;
  height: 150px;
  position: fixed;
  z-index: 9999;
`;

export const InputDiv = styled.div`
    
    display: flex;
    background-color: #2A2A2B;
    width: 94%;
    margin-left: 3%;
    margin-right: 3%;
    height: 60px;
    margin-top: 70px;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`;

export const SearchInput = styled.input`
    outline: none;
    margin-left: 10px;
    font-size: 17px;
    border: 0px;
    height: 50%;
    width: 85%;
    background-color: #2A2A2B;
    color: white;
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

export const ListDiv = styled.div`
  margin-top: 110px;
  margin-bottom: 15px;
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
  padding: 0 ;
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
