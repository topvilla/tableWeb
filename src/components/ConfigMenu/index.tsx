import React, { useState, useEffect } from 'react';

import {Container , SizeGraphicOptions} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { updateGraphicSelected } from '../../store/ducks/board/actions';
import { Graphic } from '../../store/ducks/board/types';

import HandlerSizeElement from './../handlerSizeElement/inde';


const ConfigMenu = ()=>{


    const state = useSelector((state:RootState)=>state.board);
    const graphicActive = (state.graphicActive as Graphic);
    const dispatch = useDispatch();


    function updateStateActiveGraphic(graphic:Graphic){
        dispatch(updateGraphicSelected(graphic));
    }

    return <Container>
        
        <HandlerSizeElement 
            graphicActive = {graphicActive} 
            updateStateGraphic = {updateStateActiveGraphic}
        />

    </Container>
}
export default ConfigMenu;