
//types
export enum BoardTypes{
    ADD_GRAPHIC = "board/ADD_GRAPHIC",
    SELECT_GRAPHIC = "board/SELECT_GRAPHIC ",
    UPDATE_GRAPHIC_SELECTED = "board/UPDATE_GRAPHIC_SELECTED ",
    UPDATE_GRAPHIC = "board/UPDATE_GRAPHIC ",
    HIDDEN_GRAPHIC = "board/HIDDEN_GRAPHIC ",
    DEACTIVATE_GRAPHIC = "board/DEACTIVATE_GRAPHIC",
    UPDATE_BOARD = "board/UPDATE_BOARD",

}


//actions
interface addGraphicAction {
    type:string,
    graphic:Graphic
}

interface selectGraphicAction {
    type:string,
    graphic:IGraphic
}

interface hiddenGraphic{
    type:string,
    graphic:Graphic
}

interface updateGraphicSelected{
    type:string,
    graphic:Graphic
}
interface updateGraphic{
    type:string,
    graphic:Graphic
}

interface deactivateGraphicAction{
    type:string,
    graphic?:Graphic 
}

export interface updateBoardStateActionType {
    type:string,
    board:IBoard,
    graphic?:Graphic 
}

export type BoardActions = addGraphicAction | selectGraphicAction 
| updateGraphicSelected | hiddenGraphic | updateGraphic | deactivateGraphicAction | updateBoardStateActionType;

// states
export interface IGraphic {
    id:string,
    name:string,
    width:number,
    heigth:number;
    visible:boolean,
    selected:boolean;
    justifyContent:string,
    alignItems:string;
    backGroundColor:string;
    type:string;
    childrens:Array<IGraphic>
}

// export interface IContainer extends IGraphic{
//     childrens:Array<IGraphic | IContainer>
// }

export interface IBoard{
    backGroundColor:string;
    type:string;
} 

export type Graphic = IGraphic;

export interface BoardState {

    readonly board:IBoard,
    readonly graphics:Array<Graphic>,
    readonly graphicActive:Graphic | null,
}