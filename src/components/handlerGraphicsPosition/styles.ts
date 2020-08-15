import styled from 'styled-components';



export const Container = styled.div`
    
    height:50px;
    margin-bottom:20px;

    div{
        height:100%;
        width:100%;
        border-bottom:solid 0.5px lightgray;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        align-items:center;
    }
    button{
        width:30px;
        height:30px;
        border:none;
        background-color:inherit;
        font-size:1.1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        color:dimgray;
    }
    button:hover{
        background-color:#E5E5E5;
        color:black;
    }

`;