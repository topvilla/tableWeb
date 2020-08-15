import React from 'react';

import {Container,Title,BackButton} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { selectGraphicAction, hiddenGraphicAction } from '../../store/ducks/board/actions';
import { Graphic } from '../../store/ducks/board/types';
import Layers from '../layers';


import { IoIosArrowBack } from "react-icons/io";

export default function ContainerLayer(){

    const state = useSelector((state:RootState)=>state.board);
    const dispatch = useDispatch();

    function selectGraphic(graphic:Graphic){
        dispatch(selectGraphicAction(graphic));
    }
    function hiddenGraphic(graphic:Graphic){
        dispatch(hiddenGraphicAction(graphic));
    }
    
    return <Container>
        <Title><BackButton><IoIosArrowBack/></BackButton>Camadas</Title>
        <Layers 
            graphics = {state!.graphics}
            hiddenGraphic = {hiddenGraphic}
            selectGraphic = {selectGraphic}
        />
    </Container>
}