import React,{useState,useEffect} from 'react';


import {Container,Input,Label} from './styles';

import { AiOutlineColumnWidth , AiOutlineColumnHeight} from "react-icons/ai";
import { IDesingTools } from './../../index';


const SizeTools:React.FC<IDesingTools> = ({graphicActive,updateStateGraphic})=>{

    const [heigth,setHeight] = useState<string>('0');
    const [width,setWidth] = useState<string>('0');

    useEffect(()=>{
        if(graphicActive){
            setHeight(`${graphicActive!.heigth}`);
            setWidth(`${graphicActive!.width}`);
        }
    },[graphicActive])

    function handlerChangeSizeHeight(event:React.ChangeEvent<HTMLInputElement>){
        const {target} = event;
        setHeight(target.value);
    }
    function handlerChangeSizeWidth(event:React.ChangeEvent<HTMLInputElement>){
        const {target} = event;
        setWidth(target.value);
    }
    function handlerKeyPressEnter(event:React.KeyboardEvent<HTMLInputElement>){
        const {key} = event;
        if(key === 'Enter')
            parserSizesUpdateSizesStateActiveGraphic();
    }
    function parserSizesUpdateSizesStateActiveGraphic(){
        const heigthParser = parseInt(heigth);
        const widthParser = parseInt(width);
        updateStateGraphic({
            ...graphicActive!,
            heigth:heigthParser,
            width:widthParser
        });
    }

    function renderSizeChangeElement(){
        if(graphicActive){
            return <div>
            <Label>
                <AiOutlineColumnWidth size = {20}/>
                <Input type = "number" value = {width}
                 onChange = {handlerChangeSizeWidth}
                 onKeyPress = {handlerKeyPressEnter}
                />
            </Label>
            <Label>
                <AiOutlineColumnHeight size = {20}/>
                <Input type = "number" value = {heigth}
                    onChange = {handlerChangeSizeHeight}
                    onKeyPress = {handlerKeyPressEnter}
                />
            </Label>
        </div>
        }
    }

    return <Container>
        {
            renderSizeChangeElement()
        }
    </Container>
}
export default SizeTools;