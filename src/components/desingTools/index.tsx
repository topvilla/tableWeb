import React from 'react';

import {Container ,Title} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { updateGraphicSelectedAction, updateBoardStateAction} from '../../store/ducks/board/actions';
import { Graphic, IBoard } from '../../store/ducks/board/types';
import FillTools from './components/fill/index';
import PositionTools from './components/position/index';
import SizeTools from './components/size/index';
import LayerTools from './components/layer/index';



export interface IDesingTools{
    graphicActive:Graphic,
    updateStateGraphic:(graphic:Graphic)=>void;
}

export interface IDesingToolsWithBoard extends IDesingTools{
    board:IBoard,
    updateBoardState:(board:IBoard)=>void;
}

const DesingTools = ()=>{

    const state = useSelector((state:RootState)=>state.board);
    const graphicActive = (state.graphicActive as Graphic);
    const {board} = state;
    const dispatch = useDispatch();

    function updateStateActiveGraphic(graphic:Graphic){
        dispatch(updateGraphicSelectedAction(graphic));
    }
    function updateStateBoardAction(board:IBoard){
        dispatch(updateBoardStateAction(board));
    }

    function renderToolsForGraphicActive(){
    
        if(graphicActive){
            return <>
                <PositionTools
                graphicActive = {graphicActive} 
                updateStateGraphic = {updateStateActiveGraphic}
                />
                <SizeTools 
                    graphicActive = {graphicActive} 
                    updateStateGraphic = {updateStateActiveGraphic}
                />
                <LayerTools
                    graphicActive = {graphicActive} 
                    updateStateGraphic = {updateStateActiveGraphic}
                />
            </>
        }
              
    }

    return <Container>
        <Title>
             <h1>Desing</h1> 
        </Title>
        {
            renderToolsForGraphicActive()
        }
       <FillTools 
                graphicActive = {graphicActive} 
                updateStateGraphic = {updateStateActiveGraphic}
                updateBoardState = {updateStateBoardAction}
                board = {board}
        />
    </Container>
}
export default DesingTools;