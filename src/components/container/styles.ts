import styled from 'styled-components';

interface Props{
    height:string,
    selected:boolean
}

export const Container = styled.div<Props>`
    height:${props=>props.height};
    border:${props=>props.selected?'solid 2px blue':'solid 1px dimgray'};
`;