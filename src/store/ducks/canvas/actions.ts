
import {CanvasTypes} from './types';

export const moveMouseAction = (x:number,y:number)=>{
    return {
        type:CanvasTypes.MOVE_MOUSE,
        x,
        y
    }
}

