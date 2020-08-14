import React from 'react';

import {Container, Layouts} from './styles';
import ConfigMenu from '../ConfigMenu';
import ToolsBar from '../tools';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import BoardContainer from '../container';
import { IContainer, Graphic} from '../../store/ducks/board/types';



export default function Board(){

    const state = useSelector((state:RootState)=>state.board);
    const graphics:Array<Graphic> = state.graphics;

    return <Container>
            {/* <ToolsBar/> */}
                <Layouts>
                    {
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
           <ConfigMenu/>
    </Container>
}