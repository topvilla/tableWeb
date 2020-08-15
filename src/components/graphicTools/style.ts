import styled from 'styled-components';


export const Container = styled.div`
    height:100%;
    width:60px;
    display:flex;
    flex-flow:column;
    justify-content:center;
    border-right:solid 1px lightgray;

`;

export const Tools = styled.div`

    display:flex;
    height:80%;
    flex-flow:column;
    justify-content:flex-start;
    align-items:center;
    padding:5px;
`;
export const Tool = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;
    width:50px;
    margin-top:10px;
    border-radius:5px;
    font-size:1.2rem;
    color:dimgray;
    :hover{
        color:#3386FF
    }

`;
export const Layer = styled.div`
     display:flex;
     height:20%;
     justify-content:center;
     align-items:flex-start;
     padding:5px;
`;

export const LayerButton = styled.button`

    display:flex;
    justify-content:center;
    align-items:center;
    width:40px;
    height:40px;
    font-size:1.5rem;
    border:none;
    background-color:inherit;
    color:dimgray;
    :hover{
        color:#3386FF
    }
`;