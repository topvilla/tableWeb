import React from 'react';

import {Container,Tools,Tool,Layer,LayerButton} from './style';

import { FiLayers } from "react-icons/fi";
import { GoTextSize } from "react-icons/go";
import { IoIosImages } from "react-icons/io";
import { MdVideoLibrary , MdViewList} from "react-icons/md";
import { AiOutlineGroup } from "react-icons/ai";


const GraphicTools = ()=>{

    return <Container>
        <Tools>
                <Tool>
                    <AiOutlineGroup/>
                </Tool>
                <Tool>
                    <IoIosImages/>
                </Tool>
                <Tool>
                    <MdVideoLibrary/>
                </Tool>
                <Tool>
                    <MdViewList/>
                </Tool>
        </Tools>
        <Layer>
             <LayerButton>
                <FiLayers/>
             </LayerButton>
        </Layer>

    </Container>
}

export default GraphicTools;