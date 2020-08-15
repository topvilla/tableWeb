import React from 'react';


import {Container} from './styles';
import { Graphic } from '../../store/ducks/board/types';


interface Props {
    graphic:Graphic,
    index:number,
    hiddenGraphic:(graphic:Graphic)=>void;
    selectGraphic:(graphic:Graphic)=>void;

}

const Layer:React.FC<Props> = ({graphic,index,hiddenGraphic,selectGraphic})=>{
    function renderLayeName(){
        if(graphic.name.length === 0)
            return `${graphic.type} - ${index + 1}`
        return `${graphic.name}`
    }
    function hiddenLayer(){
        hiddenGraphic({
            ...graphic,
            visible:!graphic.visible,
        });
    }
    return <Container
                selected = {graphic.selected}
                onClick = {()=>selectGraphic(graphic)}
            >
        {
            renderLayeName()
        }
        <button onClick = {()=>hiddenLayer()}>
            {graphic.visible ? 'Esconder':'visualizar'}
        </button>
    </Container>
}
export default Layer;