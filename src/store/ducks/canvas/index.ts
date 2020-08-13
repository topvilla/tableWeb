import {CanvasState,CanvasActionTypes,CanvasTypes} from './types';

const INITIAL_STATE:CanvasState = {
    mouseCoordinate:{
        x:0,
        y:0
    }
}

export function canvasReducer(
    state = INITIAL_STATE,
    action:CanvasActionTypes
){
   
    switch (action.type) {
        case CanvasTypes.MOVE_MOUSE:
            return {
                ...state,
                mouseCoordinate:{
                    x:action.x,
                    y:action.y
                }
            }
        default:
            return {...state}
    }
}