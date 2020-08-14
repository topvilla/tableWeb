import React from 'react';

import {Container} from './styles';
import {Graphic} from '../../store/ducks/board/types';
import { useDispatch } from 'react-redux';
import { selectGraphicAction } from '../../store/ducks/board/actions';

interface Props{
    container:Graphic
}
const BoardContainer:React.FC<Props> = ({container})=>{
    const dispatch = useDispatch();
    return <Container
            height = {`${container.heigth}px`} 
            selected = {container.selected}
            visible = {container.visible}
            onClick = {()=>{
                dispatch(selectGraphicAction(container));
            }}
        >
        container
    </Container>
}
export default BoardContainer;