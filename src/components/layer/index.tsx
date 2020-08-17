import React, { useState } from 'react';


import {Container , Content,MoreButton,Name} from './styles';
import { Graphic } from '../../store/ducks/board/types';
import HiddenButton from '../hiddenButton';
import Layers from '../layers';

import { IoMdArrowDropright ,IoMdArrowDropdown} from "react-icons/io";

interface Props {
    graphic:Graphic,
    index:number,
    hiddenGraphic:(graphic:Graphic)=>void;
    selectGraphic:(graphic:Graphic)=>void;
}

const Layer:React.FC<Props> = ({graphic,index,hiddenGraphic,selectGraphic})=>{

    const [hiddenChildren,sethiddenChildren] = useState<boolean>(true);

    function handlerHiddenChidrens(){
        sethiddenChildren(!hiddenChildren);
    }

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
    function renderSubLayer(){
        if(graphic.childrens.length > 0 && hiddenChildren){
            return <Layers graphics = {graphic.childrens} 
                hiddenGraphic = {hiddenGraphic} 
                selectGraphic = {selectGraphic} 
            />
        }
    }

    return <Container
                selected = {graphic.selected}
                onClick = {(event)=>{
                    selectGraphic(graphic);
                    event.preventDefault();
                    event.stopPropagation();
                }}
            >
             <Content 
                selected = {graphic.selected}
             >
                    <MoreButton
                        onClick = {()=>handlerHiddenChidrens()}
                    >
                        {hiddenChildren ? <IoMdArrowDropright/>:<IoMdArrowDropdown/>}
                    </MoreButton>
                    <Name> 
                    {
                    renderLayeName()
                    }
                    </Name>
                    <HiddenButton hidden = {hiddenLayer} graphicActive = {graphic}/>
             </Content>
             {
                 renderSubLayer()
             }
    </Container>
}
export default Layer;