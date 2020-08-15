import styled from 'styled-components';



export const Container = styled.div`

   display:flex;
   div{
        display:flex;
        flex-flow:row;
        justify-content:center;
        padding:10px;
        border-bottom:solid 0.5px lightgray;
        flex:1;
   } 
`;
export const Label = styled.label`
    font-size: 0.8rem;
    flex:1;
    display:flex;
    flex-flow:row;
    align-items:center;
    margin-left:5px;
    :hover{
        border:solid 1px lightgray;
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }   
`;
export const Input = styled.input`

    margin-left:20px;
    width:40px;
    height:25px;
    border:none;
    -moz-appearance: textfield;
    appearance: textfield;
    font-size:0.6rem;

`;