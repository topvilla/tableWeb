import React from 'react';
import { Graphic } from '../../store/ducks/board/types';

import  {Container} from './styles';

import HandlerSizeElement from '../handlerSizeElement';
import HandlerGraphicsPosition from './../handlerGraphicsPosition/index';
import HandlerLayer from '../handlerLayer';
import Fill from '../fill';

interface Props {
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}

const ToolsGraphiStyle:React.FC<Props> = ({graphicActive,updateStateGraphic})=>{

    return <Container>
          <HandlerGraphicsPosition
            graphicActive = {graphicActive} 
            updateStateGraphic = {updateStateGraphic}
            />
            <HandlerSizeElement 
                graphicActive = {graphicActive} 
                updateStateGraphic = {updateStateGraphic}
            />
            <HandlerLayer
                graphicActive = {graphicActive} 
                updateStateGraphic = {updateStateGraphic}
            />
            <Fill 
                graphicActive = {graphicActive} 
                updateStateGraphic = {updateStateGraphic}
            />
    </Container>
}

export default ToolsGraphiStyle;