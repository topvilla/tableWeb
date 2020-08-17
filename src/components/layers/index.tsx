import React from 'react';


import {Container, List} from './styles';
import { Graphic } from '../../store/ducks/board/types';
import Layer from '../layer';

interface Props {
    graphics:Array<Graphic>,
    hiddenGraphic:(graphic:Graphic)=>void;
    selectGraphic:(graphic:Graphic)=>void;
}

const Layers:React.FC<Props> = ({graphics,hiddenGraphic,selectGraphic})=>{

    return  <List>
        {
            graphics.map((graphic,index)=>{
                return <Layer 
                    key = {graphic.id}
                    graphic = {graphic} 
                    index = {index}
                    hiddenGraphic = {hiddenGraphic}
                    selectGraphic = {selectGraphic}
                />
            })
        }
    </List>
       
}
export default Layers;