import styled from 'styled-components';


interface Props{
    selected:boolean
}

export const Container = styled.li<Props>`
    background-color:${props=>props.selected?'#E7ECFF':'transparent'}
`;