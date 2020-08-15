import React  from 'react';


import {Container , SubContainer , LayerInfo,Title ,LayerName} from './styles';
import { Graphic } from '../../store/ducks/board/types';
import HiddenButton from '../hiddenButton';

interface Props{
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}

const HandlerLayer:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{
 
    function hiddenLayer(){
        updateStateGraphic({
            ...graphicActive!,
            visible:!graphicActive.visible
        });
    }
    function renderLayeName(graphic:Graphic){
        if(graphic.name.length === 0)
            return `${graphic.type}`;
        return `${graphic.name}`;
    }

    function renderChangeLayer(){
        if(graphicActive){
            return <SubContainer>
                <Title>Camada</Title>
                <LayerInfo>
                    <LayerName>{renderLayeName(graphicActive)}</LayerName>
                    <HiddenButton hidden = {hiddenLayer} graphicActive = {graphicActive} />
                </LayerInfo>
            </SubContainer>
        }
    }
    
    return <Container>
        {
            renderChangeLayer()
        }
    </Container>
}

export default HandlerLayer;