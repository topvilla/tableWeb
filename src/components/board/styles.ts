import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    height: calc(100% - 20px);
    justify-content:flex-end;
    align-items:center;
`;


interface Props{
    backGroundColor:string,
}
export const Layouts = styled.div<Props>`
    background-color:${props=>props.backGroundColor};
    width:80%;
    height:100%;
    padding:15px;
    display:flex;
    flex-flow:column;
    justify-content:space-evenly;


`;

export const Menu = styled.div`
    display:flex;
    height:100%;
    background-color:#fff;
`;