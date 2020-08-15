import styled from 'styled-components';


export const Container = styled.div`
    margin-top:10px;
    display:flex;
    flex-flow:column;
    padding:10px;
    border-bottom:solid 1px lightgray;
`;
export const Title = styled.h2`
    font-size: 0.8rem;
    flex:2;

`;
export const SubContainer = styled.div`

    display:flex;
    flex-flow:row;
    margin-top:20px;
    align-items:center;
    justify-content:center;
    width:130px;
    :hover{
        border:solid 1px lightgray;
    }
`;

export const InputColor = styled.input`

    border:none;
    background-color:inherit;
    height:30px;

`;
export const InputText = styled.input`

    width:80px;
    border:none;
    height:25px;
    font-size:0.6rem;

`;