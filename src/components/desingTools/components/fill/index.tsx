import React, { useState, useEffect } from 'react';


import {Container} from './styles';
import { IDesingToolsWithBoard } from '../..';


const FillTools:React.FC<IDesingToolsWithBoard> = ({graphicActive,updateStateGraphic,board})=>{

    const [color,setColor] = useState<string>('');

    useEffect(()=>{
        if(graphicActive){
            if(graphicActive.backGroundColor !== 'transparent' && graphicActive.backGroundColor !== 'none')
                setColor(graphicActive.backGroundColor);
            else setColor(board.backGroundColor);
        }else setColor(board.backGroundColor);
        
    },[graphicActive,board]);


    function handlerChangeColor(event:React.ChangeEvent<HTMLInputElement>){
        const color = event.target.value;
        setColor(color);
        if(graphicActive)updateBackGroundColorGraphicActive(color);
    }
    function handlerChangeColorText(event:React.ChangeEvent<HTMLInputElement>){
        const color = event.target.value;
        setColor(color);
    }
    function handlerKeyPressEnter(event:React.KeyboardEvent<HTMLInputElement>){
        const {key} = event;
        if(key === 'Enter')parseColorText();
    }
    function parseColorText(){
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
        if(graphicActive || board){
            return <div>
                <div>
                    <h3>Cor de fundo</h3>
                </div>
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
export default FillTools;