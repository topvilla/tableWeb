import React, { useState, useEffect, useRef } from 'react';

import {Container} from './styles';
import { useSelector} from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';


export default function Retangle(){

    const [clicked,setClicked] = useState<boolean>(false);
    const [clientX,setClientX] = useState<number>(0);
    const [clientY,setClientY] = useState<number>(0);

    const canvas = useSelector((state:RootState)=>state.canvas);

    useEffect(()=>{
        if(clicked === true){
            console.log(canvas.mouseCoordinate);
            setClientX(canvas.mouseCoordinate.x - 250);
            setClientY(canvas.mouseCoordinate.y - 250);

        }
    })

    return <Container
        onClick = {()=>{
            console.log('selecionar objeto para ajustar  tamanho etc');
        }}
        onMouseDown = {()=>{
            setClicked(true);
        }}
        onMouseUp = {()=>{
            setClicked(false);
        }}

        style = {{
            marginLeft:`${clientX}px`,
            marginTop:`${clientY}px`,
        }}
    >
        text
    </Container>
}