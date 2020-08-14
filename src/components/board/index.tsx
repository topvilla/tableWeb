import React from 'react';

import {Container, Layouts} from './styles';
import ConfigMenu from '../ConfigMenu';
import ToolsBar from '../tools';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import BoardContainer from '../container';
import {IContainer} from '../../store/ducks/board/types';



export default function Board(){

    const state = useSelector((state:RootState)=>state.board);

    return <Container>
            <ToolsBar/>
                <Layouts>
                    {
                        state.graphics.map((container)=>{
                            return <BoardContainer 
                                    key = {container.id} 
                                        container = {(container as IContainer)}
                                    />
                        })
                    }
                </Layouts>
           <ConfigMenu/>
    </Container>
}