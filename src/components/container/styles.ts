import styled from 'styled-components';

interface Props{
    height:string,
    selected:boolean,
    visible:boolean,
    justifyContent:string,
    alignItems:string,
    backGroundColor:string

}

export const Container = styled.div<Props>`
    height:${props=>props.height};
    border:${props=>props.selected?'solid 1.5px #5C9DFF':'dashed 1px dimgray'};
    visibility:${props=>props.visible?'visible':'hidden'};
    display:flex;
    width:100%;
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignItems};
    background-color:${props=>props.backGroundColor};
`;