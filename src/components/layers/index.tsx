import React from 'react';


import {Container} from './styles';
import { Graphic } from '../../store/ducks/board/types';
import Layer from '../layer';

interface Props {
    graphics:Array<Graphic>,
    hiddenGraphic:(graphic:Graphic)=>void;
    selectGraphic:(graphic:Graphic)=>void;
}

const Layers:React.FC<Props> = ({graphics,hiddenGraphic,selectGraphic})=>{

    return <Container>
        <ul>
            {
                graphics.map((graphic,index)=>{
                    return <Layer 
                        graphic = {graphic} 
                        index = {index}
                        hiddenGraphic = {hiddenGraphic}
                        selectGraphic = {selectGraphic}
                    />
                })
            }
        </ul>
    </Container>
}
export default Layers;