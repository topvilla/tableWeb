
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

export const updateGraphicSelectedAction = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.UPDATE_GRAPHIC_SELECTED,
        graphic
    }
}

export const updateGraphicAction = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.UPDATE_GRAPHIC,
        graphic
    }
}

export const hiddenGraphicAction = (graphic:IGraphic | IContainer)=>{
    return {
        type:BoardTypes.HIDDEN_GRAPHIC,
        graphic
    }
}

export const deactivateGraphicAction =()=>{
    return {
        type:BoardTypes.DEACTIVATE_GRAPHIC,
        graphic:null
    }
}