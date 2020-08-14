import styled from 'styled-components';

interface Props{
    height:string,
    selected:boolean,
    visible:boolean,
    justifyContent:string,
    alignItems:string,

}

export const Container = styled.div<Props>`
    height:${props=>props.height};
    border:${props=>props.selected?'solid 2px blue':'dashed 1px dimgray'};
    visibility:${props=>props.visible?'visible':'hidden'};
    display:flex;
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignItems};
`;