import React,{useState,useEffect} from 'react';


import {Container} from './styles';
import {Graphic} from '../../store/ducks/board/types';


interface Props{
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}
const HandlerSizeElement:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{

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
            <label>
                <input type = "number" value = {width}
                 onChange = {handlerChangeSizeWidth}
                 onKeyPress = {handlerKeyPressEnter}
                />
                %Largura
            </label>
            <label>
                <input type = "number" value = {heigth}
                    onChange = {handlerChangeSizeHeight}
                    onKeyPress = {handlerKeyPressEnter}
                />
                Altura
            </label>
        </div>
        }
    }

    return <Container>
        {
            renderSizeChangeElement()
        }
    </Container>
}
export default HandlerSizeElement;