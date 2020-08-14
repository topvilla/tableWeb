import React, { useState, useEffect } from 'react';

import {Container , SizeGraphicOptions} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { updateGraphicSelected } from '../../store/ducks/board/actions';


const ConfigMenu = ()=>{

    
    const [heigth,setHeight] = useState<string>('0');
    const [width,setWidth] = useState<string>('0');

    const {graphicActivi} = useSelector((state:RootState)=>state.board);
    const dispatch = useDispatch();

   

    useEffect(()=>{
        if(graphicActivi){
            setHeight(`${graphicActivi!.heigth}`);
            setWidth(`${graphicActivi!.width}`);
        }
    },[graphicActivi])
    
    function renderSizeElement(){
        if(graphicActivi !== undefined){
            return <SizeGraphicOptions>
            <label>
                <input type = "number" value = {width}
                 onChange = {({target})=>{
                    setHeight(target.value);
                 }}
                 onKeyPress = {({key})=>{
                    if(key === 'Enter'){
                        const value = parseInt(heigth);
                        dispatch(updateGraphicSelected({
                            ...graphicActivi!,
                            width:value
                        }));
                    }
                 }}
                />
                %Largura
            </label>
            <label>
                <input type = "number" value = {heigth}
                    onChange = {({target})=>{
                        setHeight(target.value);
                    }}
                    onKeyPress = {({key})=>{
                        if(key === 'Enter'){
                            const value = parseInt(heigth);
                            dispatch(updateGraphicSelected({
                                ...graphicActivi!,
                                heigth:value
                            }));
                        }
                    }}
                />
                Altura
            </label>
        </SizeGraphicOptions>
        }
    }

    return <Container>
        {
            renderSizeElement()
        }
        

    </Container>
}
export default ConfigMenu;