import React, { useEffect } from 'react';

import {Container, Layouts, Menu} from './styles';
import ContainerLayers from '../containerLayers';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import BoardContainer from '../container';
import { Graphic} from '../../store/ducks/board/types';
import { deactivateGraphicAction } from '../../store/ducks/board/actions';
import DesingTools from './../desingTools/index';
import GraphicTools from '../graphicTools/indext';



export default function Board(){

    const state = useSelector((state:RootState)=>state.board);
    const dispatch = useDispatch();
    const {board} = state;
    const graphics:Array<Graphic> = state.graphics;


    useEffect(()=>{
        window.onkeydown = (event:KeyboardEvent)=>{
            if(event.key === "Escape"){
                dispatch(deactivateGraphicAction());
            }
        }
    },[dispatch]);

    function deactiveGraphic(){
        dispatch(deactivateGraphicAction());
    }

    return <Container>
            <Menu>
                <GraphicTools/>
                <ContainerLayers/>
            </Menu>
                <Layouts
                    backGroundColor = {board.backGroundColor}
                    onClick = {(event)=>{
                        deactiveGraphic();
                        event.preventDefault();
                    }}
                >
                    {
                      // eslint-disable-next-line
                       graphics.map((graphic:Graphic)=>{
                           if(graphic.visible){
                                return <BoardContainer 
                                key = {graphic.id}
                                container = {graphic}
                                /> 
                           }
                       })
                    }
                </Layouts>
           <DesingTools/>
    </Container>
}