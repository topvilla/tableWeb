import React from 'react';

import {Container ,Title} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { updateGraphicSelected} from '../../store/ducks/board/actions';
import { Graphic } from '../../store/ducks/board/types';
import ToolsGraphiStyle from '../toolsGraphicStyle/indext';



const ConfigMenu = ()=>{

    const state = useSelector((state:RootState)=>state.board);
    const graphicActive = (state.graphicActive as Graphic);
    const dispatch = useDispatch();

    function updateStateActiveGraphic(graphic:Graphic){
        dispatch(updateGraphicSelected(graphic));
    }
    function render(){
    
        return  <ToolsGraphiStyle 
            graphicActive = {graphicActive} 
            updateStateGraphic = {updateStateActiveGraphic}
        />
              
    }
  
    return <Container>
        <Title>
             <h1>Desing</h1> 
        </Title>
       {
           render()
       }
    </Container>
}
export default ConfigMenu;