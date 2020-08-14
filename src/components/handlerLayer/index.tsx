import React , {useState} from 'react';


import {Container} from './styles';
import { Graphic } from '../../store/ducks/board/types';

interface Props{
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}

const HandlerLayer:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{
    const [opacity,setOpacity] = useState<string>('100');

    function handlerChangeOpacityValue(event:React.ChangeEvent<HTMLInputElement>){
        const {target} = event;
        setOpacity(target.value);
    }
    function handlerKeyPressEnter(event:React.KeyboardEvent<HTMLInputElement>){
        const {key} = event;
        if(key === 'Enter')
        parserSizesUpdateOpacityStateActiveGraphic();
    }
    function parserSizesUpdateOpacityStateActiveGraphic(){
        // const opacityValue = parseInt(opacity);
        updateStateGraphic({
            ...graphicActive!,
        });
    }
    function hiddenLayer(){
        updateStateGraphic({
            ...graphicActive!,
            visible:!graphicActive.visible
        });
    }

    function renderChangeLayer(){
        if(graphicActive){
            return <div>
              
                <button onClick = {()=>hiddenLayer()}>hidden</button>
            </div>
        }
    }
    return <Container>
        {
            renderChangeLayer()
        }
    </Container>
}

export default HandlerLayer;