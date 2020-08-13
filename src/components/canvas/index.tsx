import React from 'react';
import {Container} from './styles';
import Retangle from '../Retangle';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { moveMouseAction } from "./../../store/ducks/canvas/actions";


export default function Canvas(){

    const dispatch = useDispatch();
    

    return <Container onMouseMove = {(event)=>{
        dispatch(moveMouseAction(event.clientX,event.clientY));
    }}>
        <Retangle/>
    </Container>
}