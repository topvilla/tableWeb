import {BoardState,BoardActions,BoardTypes} from './types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE:BoardState = {
    graphicActivi:null,
    graphics:[
        {
            id:uuidv4().toString(),
            heigth:100,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            graphisc:[],
        },
        {
            id:uuidv4().toString(),
            heigth:500,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            graphisc:[],
        },
        {
            id:uuidv4().toString(),
            heigth:100,
            width:100,
            visible:true,
            selected:false,
            type:"container",
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
            
            return {
                ...state,
                graphicSelected:action.graphic,
                graphics:[...state.graphics.map((element)=>{
                    if(element.id === action.graphic.id) return action.graphic
                    else return element;
                })]
            }
        case BoardTypes.SELECT_GRAPHIC :
            
            return {
                ...state,
                graphicActivi:action.graphic,
                graphics:state.graphics.map((element)=>{
                    if(element.id === action.graphic.id)element.selected = true;
                    else element.selected = false;
                    return element;
                })
                
            }
        case BoardTypes.ADD_GRAPHIC :
            return {
                ...state,
                graphics:[...state.graphics,action.graphic]
            }
        default:
            return {...state}
    }
}