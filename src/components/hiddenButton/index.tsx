import React from 'react';

import {Button} from './styles';
import { Graphic } from '../../store/ducks/board/types';


import { FaRegEye , FaRegEyeSlash} from "react-icons/fa";

interface Props{
    graphicActive:Graphic,
    hidden:()=>void;
}

const HiddenButton:React.FC<Props> = ({hidden,graphicActive})=>{

    return<Button
            onClick = {()=>hidden()}
        >
        {graphicActive.visible ? <FaRegEye/>:<FaRegEyeSlash/>}
    </Button>

}
export default HiddenButton;