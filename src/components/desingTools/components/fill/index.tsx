import React, { useState, useEffect } from 'react';


import {
    Container,
    SubContainer,
    Title,
    InputColor,
    InputText
} from './styles';
import { IDesingToolsWithBoard } from '../..';


const FillTools:React.FC<IDesingToolsWithBoard> = ({graphicActive,updateStateGraphic,updateBoardState,board})=>{

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
        else updateBackGroundColorBoard(color);
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
    function updateBackGroundColorBoard(color:string){
        updateBoardState({
            ...board,
            backGroundColor:color
        })
    }

    
    return <Container>
        <Title>Cor de fundo</Title>
        <SubContainer>
                <InputColor type = "color" value = {color} onChange = {handlerChangeColor}/>
                <InputText type = "text" value = {color} 
                    onChange = {handlerChangeColorText}
                    onKeyPress = {handlerKeyPressEnter}/>
        </SubContainer>
    </Container>
}
export default FillTools;