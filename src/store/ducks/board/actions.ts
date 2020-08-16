
import { BoardTypes, Graphic, IBoard } from './types';


export const addGraphicAction = (graphic:Graphic)=>{
    return {
        type:BoardTypes.ADD_GRAPHIC,
        graphic
    }
}

export const selectGraphicAction = (graphic:Graphic)=>{
    return {
        type:BoardTypes.SELECT_GRAPHIC,
        graphic
    }
}

export const updateGraphicSelectedAction = (graphic:Graphic)=>{
    return {
        type:BoardTypes.UPDATE_GRAPHIC_SELECTED,
        graphic
    }
}

export const updateGraphicAction = (graphic:Graphic)=>{
    return {
        type:BoardTypes.UPDATE_GRAPHIC,
        graphic
    }
}

export const hiddenGraphicAction = (graphic:Graphic)=>{
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

export const updateBoardStateAction =(board:IBoard)=>{
    return {
        type:BoardTypes.UPDATE_BOARD,
        graphic:null,
        board
    }
}