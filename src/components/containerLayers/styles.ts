import styled from 'styled-components';

export const Container = styled.div`
    background-color:#fff;
    height:100%;
    width:200px;
    -webkit-box-shadow: 6px 0px 5px 0px rgba(189,189,189,1);
    -moz-box-shadow: 6px 0px 5px 0px rgba(189,189,189,1);
    box-shadow: 6px 0px 5px 0px rgba(189,189,189,1);
    
`;

export const Title = styled.h1`
    font-size:0.8rem;
    margin-top:10px;
    margin-left:5px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    flex-flow:row nowrap;

`;

export const BackButton = styled.button`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:row nowrap;
    border:none;
    background-color:inherit;

    :hover{
        color:dimgray;
    }

`;