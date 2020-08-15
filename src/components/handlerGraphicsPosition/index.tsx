import React from 'react';

import {Container} from './styles';
import {Graphic} from '../../store/ducks/board/types';

import { 
    AiOutlineAlignCenter,
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineVerticalAlignTop,
    AiOutlineVerticalAlignMiddle,
    AiOutlineVerticalAlignBottom

} from "react-icons/ai";


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
               <button onClick = {(event)=>handlerJustifyContent("flex-start")}><AiOutlineAlignLeft/></button>
               <button onClick = {(event)=>handlerJustifyContent("center")}><AiOutlineAlignCenter/></button>
               <button onClick = {(event)=>handlerJustifyContent("flex-end")}><AiOutlineAlignRight/></button>
               <button onClick = {(event)=>handlerAlignItemnsContent("flex-start")}><AiOutlineVerticalAlignTop/></button>
               <button onClick = {(event)=>handlerAlignItemnsContent("center")}><AiOutlineVerticalAlignMiddle/></button>
               <button onClick = {(event)=>handlerAlignItemnsContent("flex-end")}><AiOutlineVerticalAlignBottom/></button>
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