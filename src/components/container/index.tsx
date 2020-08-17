import React from 'react';

import {Container} from './styles';
import {Graphic} from '../../store/ducks/board/types';
import { useDispatch } from 'react-redux';
import { selectGraphicAction } from '../../store/ducks/board/actions';
import { componentFactory } from '../../factory/componentFactory';

interface Props{
    container:Graphic
}
const BoardContainer:React.FC<Props> = ({container})=>{

    
    const dispatch = useDispatch();

    function handlerClickContainer(event:React.MouseEvent<HTMLDivElement>){
        dispatch(selectGraphicAction(container));
        event.stopPropagation();
    }

    function renderChildrens(){
        if(container.childrens.length > 0){
            return container.childrens.map(graphic=>{
                return <BoardContainer key = {graphic.id} container ={graphic}/>
            })
        }
    }

    return <Container
            height = {`${container.heigth}px`} 
            width = {`${container.width}%`} 
            selected = {container.selected}
            visible = {container.visible}
            justifyContent = {container.justifyContent}
            alignItems = {container.alignItems}
            backGroundColor = {container.backGroundColor}
            onClick = {handlerClickContainer}
        >
            {
                renderChildrens()
            }
    </Container>
}
export default BoardContainer;