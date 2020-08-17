import styled from 'styled-components';


interface Props{
    selected:boolean
}

export const Container = styled.li<Props>`

    display:flex;
    flex-flow:column;
    align-items:flex-start;
    width:100%;
    padding:5px;
    background-color:${props=>props.selected?'#E7ECFF':'transparent'};
    font-size:0.6rem;

`;

export const Content = styled.div<Props>`
    background-color:red;
    display:flex;
    flex:1;
    flex-flow:row nowrap;
    align-items:center;
    width:100%;
    background-color:${props=>props.selected?'#D1DBFC':'transparent'};
    height:40px;
    border-bottom:solid 0.5px lightgray;
    :hover{
        border:solid 1px #5C9DFF;
    }
`;


export const Name = styled.p`
    width:90%;
`;
export const MoreButton = styled.button`

    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    background-color:inherit;
    font-size:1rem;
`;

