import React from 'react';

import {Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { updateGraphicSelected } from '../../store/ducks/board/actions';
import { Graphic } from '../../store/ducks/board/types';

import HandlerSizeElement from '../handlerSizeElement';
import HandlerGraphicsPosition from './../handlerGraphicsPosition/index';
import HandlerLayer from '../handlerLayer';



const ConfigMenu = ()=>{


    const state = useSelector((state:RootState)=>state.board);
    const graphicActive = (state.graphicActive as Graphic);
    const dispatch = useDispatch();


    function updateStateActiveGraphic(graphic:Graphic){
        dispatch(updateGraphicSelected(graphic));
    }

    return <Container>
        
    
        <HandlerGraphicsPosition
          graphicActive = {graphicActive} 
          updateStateGraphic = {updateStateActiveGraphic}
        />
        <HandlerSizeElement 
            graphicActive = {graphicActive} 
            updateStateGraphic = {updateStateActiveGraphic}
        />
        <HandlerLayer
             graphicActive = {graphicActive} 
             updateStateGraphic = {updateStateActiveGraphic}
        />

    </Container>
}
export default ConfigMenu;