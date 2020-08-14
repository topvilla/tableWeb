
import {BoardTypes, IGraphic,IContainer} from './types';


export const addGraphicAction = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.ADD_GRAPHIC,
        graphic
    }
}


export const selectGraphicAction = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.SELECT_GRAPHIC,
        graphic
    }
}



export const updateGraphicSelected = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.UPDATE_GRAPHIC_SELECTED,
        graphic
    }
}