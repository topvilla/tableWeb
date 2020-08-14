import React from 'react';

import {Container} from './styles';
import {Graphic} from '../../store/ducks/board/types';


interface Props{
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}
const HandlerGraphicsPosition:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{

    function handlerJustifyContent(justify:string){
        return updateStateGraphic({
            ...graphicActive,
            justifyContent:justify
        })
    }
    function handlerAlignItemnsContent(align:string){
        return updateStateGraphic({
            ...graphicActive,
            alignItems:align
        })
    }
    
    function renderPositionElementChange(){
        if(graphicActive){
            return <div>
               <button onClick = {(event)=>handlerJustifyContent("flex-start")}>let H</button>
               <button onClick = {(event)=>handlerJustifyContent("center")}>center H</button>
               <button onClick = {(event)=>handlerJustifyContent("flex-end")}>right H</button>
               <button onClick = {(event)=>handlerAlignItemnsContent("flex-start")}>let V</button>
               <button onClick = {(event)=>handlerAlignItemnsContent("center")}>center V</button>
               <button onClick = {(event)=>handlerAlignItemnsContent("flex-end")}>right V</button>
        </div>
        }
    }

    return <Container>
        {
            renderPositionElementChange()
        }
    </Container>
}
export default HandlerGraphicsPosition;