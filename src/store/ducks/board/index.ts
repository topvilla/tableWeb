import { BoardState, BoardActions, BoardTypes, Graphic, IBoard ,updateBoardStateActionType } from './types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE:BoardState = {
    board:{
        type:"board",
        backGroundColor:"#E5E5E5"
    },
    graphicActive:null,
    graphics:[
        {
            id:uuidv4().toString(),
            name:'Cabeçalho',
            heigth:700,
            width:100,
            visible:true,
            selected:false,
            type:"container",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            backGroundColor:"transparent",
            graphisc:[
                {
                    id:uuidv4().toString(),
                    name:'Corpo',
                    heigth:500,
                    width:100,
                    visible:true,
                    selected:false,
                    type:"container",
                    justifyContent:"flex-start",
                    alignItems:"flex-start",
                    backGroundColor:"transparent",
                    graphisc:[],
                },
            ],
        },
    ]
}

export function boardReducer(
    state = INITIAL_STATE,
    action:BoardActions
){
    const {graphic} = action; 
    switch (action.type) {
        case BoardTypes.UPDATE_GRAPHIC_SELECTED :
            return updateGraphicSelected(graphic!,state);
        case BoardTypes.UPDATE_GRAPHIC :
            return updateGraphic(graphic!,state);
        case BoardTypes.SELECT_GRAPHIC :
            return selectGraphic(graphic!,state);
        case BoardTypes.ADD_GRAPHIC :
            return addGraphicInGraphics(graphic!,state);
        case BoardTypes.HIDDEN_GRAPHIC :
            return hiddenGraphic(graphic!,state);
        case BoardTypes.DEACTIVATE_GRAPHIC :
            return desactiveGraphicSelectd(state);
        case BoardTypes.UPDATE_BOARD :
            const {board} = (action as updateBoardStateActionType);
            return updateBoardState(board,state);
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

function hiddenGraphic(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphics:[...state.graphics.map((element)=>{
            if(element.id === graphic.id)element.visible = !element.visible;
            return element;
        })]
    }
}

function updateGraphic(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphics:[...state.graphics.map((element)=>{
            if(element.id === graphic.id)return graphic;
            return element;
        })]
    }
}

function desactiveGraphicSelectd(state:BoardState){
    return {
        ...state,
        graphicActive:null,
        graphics:deselectsGraphics(state) 
    }
}
function deselectsGraphics(state:BoardState){
    return state.graphics.map((element)=>{
        element.selected = false;
        return element;
    })
}


function updateBoardState(board:IBoard,state:BoardState){
    return {
        ...state,
        board:{
            ...board
        }
    }
}
