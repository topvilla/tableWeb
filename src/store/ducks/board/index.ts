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
            name:'',
            heigth:700,
            width:100,
            visible:true,
            selected:false,
            type:"container-princial",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            backGroundColor:"transparent",
            childrens:[
                // {
                //     id:uuidv4().toString(),
                //     name:'Corpo',
                //     heigth:700,
                //     width:50,
                //     visible:true,
                //     selected:false,
                //     type:"container",
                //     justifyContent:"flex-start",
                //     alignItems:"flex-start",
                //     backGroundColor:"transparent",
                //     childrens:[
                //         {
                //             id:uuidv4().toString(),
                //             name:'Corpo',
                //             heigth:200,
                //             width:100,
                //             visible:true,
                //             selected:false,
                //             type:"container",
                //             justifyContent:"flex-start",
                //             alignItems:"flex-start",
                //             backGroundColor:"transparent",
                //             childrens:[],
                //         },
                //     ],
                // },
                // {
                //     id:uuidv4().toString(),
                //     name:'Corpo',
                //     heigth:700,
                //     width:50,
                //     visible:true,
                //     selected:false,
                //     type:"container",
                //     justifyContent:"flex-start",
                //     alignItems:"flex-start",
                //     backGroundColor:"transparent",
                //     childrens:[],
                // },
            ],
        },
    ]
}

export function boardReducer(state = INITIAL_STATE,action:BoardActions){

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
        graphics:[...updateGraphics(state.graphics,graphic)]
    }
}
function updateGraphics(graphics:Array<Graphic>,graphic:Graphic):Array<Graphic>{
    return graphics.map(element=>{
         if(element.id === graphic.id)return graphic;
         if(hasChildren(element)){
             return {
             ...element,
             childrens:[
                ... updateGraphics(element.childrens,graphic)
             ]
           } 
         }
         return element;  
    })
 }
function selectGraphic(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphicActive:graphic,
        graphics:[
            ...selectGraphicInGraphics(state.graphics,graphic)
        ]
        
    }
}
function selectGraphicInGraphics(graphics:Array<Graphic>,graphic:Graphic):Array<Graphic>{
    return graphics.map((element)=>{
            if(element.id === graphic.id)element.selected = true;
            else element.selected = false;
            if(hasChildren(element)){
                element.childrens = [
                    ...selectGraphicInGraphics(element.childrens,graphic)
                ]
            }
            return element;
    });
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
        graphics:[...hiddenGraphics(state.graphics,graphic)]
    }
}
function hiddenGraphics(graphics:Array<Graphic>,graphic:Graphic):Array<Graphic>{

    return graphics.map((element)=>{
        if(element.id === graphic.id)element.visible = !element.visible;
        else if(hasChildren(element)){
            element.childrens = [
                    ...hiddenGraphics(element.childrens,graphic)
                ]
            }
        return element;
    })
}

function desactiveGraphicSelectd(state:BoardState){
    return {
        ...state,
        graphicActive:null,
        graphics:[
            ...deselectsGraphics(state.graphics)
        ]
    }
}
function deselectsGraphics(graphics:Array<Graphic>){
    return graphics.map((element)=>{
        element.selected = false;
        if(hasChildren(element)){
            element.childrens = [
                ...deselectsGraphics(element.childrens)
            ]
        }
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


function updateGraphic(graphic:Graphic,state:BoardState){
    return {
        ...state,
        graphics:[...state.graphics.map((element)=>{
            if(element.id === graphic.id)return graphic;
            return element;
        })]
    }
}


// function findGraphicSelected(graphic:Graphic,filter:(children:Graphic)=>boolean){
//     if(filter(graphic))return graphic;
//     if(hasChildren(graphic)){
//        return graphic.childrens.find(children=>{
//             return findGraphicSelected(children,filter);
//         });
//      } 
// }

// function add(graphics:Array<IGraphic | IContainer>,where:number,graphic:IGraphic | IContainer){
//    return graphics.map(element=>{
//           if(element.id === where){
//             return {
//               ...element,
//                graphisc:[
//                  ...element.graphisc,graphic
//                ]
//             }
//           }
//           if(hasChildren(element)){
                
//             return {
//               ...element,
//                graphisc:[
//                   ...add(element.graphisc,where,graphic)
//                ]
//             }
//           }
//           return element;
          
//    })
// }
function hasChildren(conteiner:Graphic):boolean{
    return conteiner.childrens && conteiner.childrens.length > 0
}
