import React, { useState, useEffect } from 'react';


import {Container} from './styles';
import { Graphic } from '../../store/ducks/board/types';

interface Props {
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}


const Fill:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{

    const [color,setColor] = useState<string>('');

    useEffect(()=>{
        if(graphicActive){
            if(graphicActive.backGroundColor !== 'transparent' && graphicActive.backGroundColor !== 'none')
                setColor(graphicActive.backGroundColor);
            else setColor('');
        }
    },[graphicActive])

    function handlerChangeColor(event:React.ChangeEvent<HTMLInputElement>){
        const color = event.target.value;
        setColor(color);
        updateBackGroundColorGraphicActive(color);
    }
    function handlerChangeColorText(event:React.ChangeEvent<HTMLInputElement>){
        const color = event.target.value;
        setColor(color);
    }
    function handlerKeyPressEnter(event:React.KeyboardEvent<HTMLInputElement>){
        const {key} = event;
        if(key === 'Enter')
            if(color[0] === '#')updateBackGroundColorGraphicActive(color);
            else updateBackGroundColorGraphicActive(`#${color}`);
       
    }
    function updateBackGroundColorGraphicActive(color:string){
        updateStateGraphic({
            ...graphicActive,
            backGroundColor:color
        })
    }

    function renderHandlerFillGraphic(){
        if(graphicActive){
            return <div>
                <input type = "color" value = {color} onChange = {handlerChangeColor}/>
                <input type = "text" value = {color} 
                    onChange = {handlerChangeColorText}
                    onKeyPress = {handlerKeyPressEnter}/>
            </div>
        }
    }
    return <Container>
        {
            renderHandlerFillGraphic()
        }
    </Container>
}
export default Fill;