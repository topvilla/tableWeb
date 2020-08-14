import {BoardState,BoardActions,BoardTypes, Graphic} from './types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE:BoardState = {
    graphicActive:null,
    graphics:[
        {
            id:uuidv4().toString(),
            heigth:100,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            graphisc:[],
        },
        {
            id:uuidv4().toString(),
            heigth:500,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            graphisc:[],
        },
        {
            id:uuidv4().toString(),
            heigth:100,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            graphisc:[],
        },

    ]
}

export function boardReducer(
    state = INITIAL_STATE,
    action:BoardActions
){
   
    switch (action.type) {

        case BoardTypes.UPDATE_GRAPHIC_SELECTED :
            return updateGraphicSelected(action.graphic,state);
        case BoardTypes.SELECT_GRAPHIC :
            return selectGraphic(action.graphic,state);
        case BoardTypes.ADD_GRAPHIC :
            return addGraphicInGraphics(action.graphic,state);
        default:
            return {...state}
    }
}

function updateGraphicSelected(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphicActive:graphic,
        graphics:[...updateGraphics(graphic,state)]
    }
}
function updateGraphics(graphic:Graphic,state:BoardState){
   return state.graphics.map((element)=>{
        if(element.id === graphic.id) return graphic
        else return element;
    })
}
function selectGraphic(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphicActive:graphic,
        graphics:selectGraphicInGraphics(graphic,state)
        
    }
}
function selectGraphicInGraphics(graphic:Graphic,state:BoardState){
    return state.graphics.map((element)=>{
        if(element.id === graphic.id)element.selected = true;
        else element.selected = false;
        return element;
    })
}
function addGraphicInGraphics(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphics:[...state.graphics,graphic]
    }
}