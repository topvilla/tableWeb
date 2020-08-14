import React from 'react';

import {Container} from './styles';
import {IContainer} from '../../store/ducks/board/types';
import { useDispatch } from 'react-redux';
import { selectGraphicAction } from '../../store/ducks/board/actions';

interface Props{
    container:IContainer
}
const BoardContainer:React.FC<Props> = ({container})=>{
    const dispatch = useDispatch();
    return <Container
            height = {`${container.heigth}px`} 
            selected = {container.selected}
            onClick = {()=>{
                dispatch(selectGraphicAction(container));
            }}
        >
        container
    </Container>
}
export default BoardContainer;