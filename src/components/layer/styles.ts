import styled from 'styled-components';


interface Props{
    selected:boolean
}

export const Container = styled.li<Props>`

    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:5px;
    border-bottom:solid 1px lightgray;
    background-color:${props=>props.selected?'#E7ECFF':'transparent'};
    font-size:0.6rem;
    :hover{
        border:solid 1px #5C9DFF;
    }
`;