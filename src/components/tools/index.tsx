import React from 'react';

import {Container} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { selectGraphicAction, hiddenGraphicAction } from '../../store/ducks/board/actions';
import { Graphic } from '../../store/ducks/board/types';
import Layers from '../layers';


export default function ToolsBar(){

    const state = useSelector((state:RootState)=>state.board);
    const dispatch = useDispatch();

    function selectGraphic(graphic:Graphic){
        dispatch(selectGraphicAction(graphic));
    }
    function hiddenGraphic(graphic:Graphic){
        dispatch(hiddenGraphicAction(graphic));
    }
    
    return <Container>
        <Layers 
            graphics = {state!.graphics}
            hiddenGraphic = {hiddenGraphic}
            selectGraphic = {selectGraphic}
        />
    </Container>
}