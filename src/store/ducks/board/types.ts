
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
    graphic:IGraphic | IContainer
}

interface selectGraphicAction {
    type:string,
    graphic:IGraphic | IContainer
}

interface hiddenGraphic{
    type:string,
    graphic:IGraphic | IContainer
}

interface updateGraphicSelected{
    type:string,
    graphic:IGraphic | IContainer
}
interface updateGraphic{
    type:string,
    graphic:IGraphic | IContainer
}

interface deactivateGraphicAction{
    type:string,
    graphic?:IGraphic | IContainer 
}

export interface updateBoardStateActionType {
    type:string,
    board:IBoard,
    graphic?:IGraphic | IContainer 
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
}

export interface IContainer extends IGraphic{
    graphisc:Array<IGraphic | IContainer>
}

export interface IBoard{
    backGroundColor:string;
    type:string;
} 

export type Graphic = IGraphic | IContainer;

export interface BoardState {

    readonly board:IBoard,
    readonly graphics:Array<Graphic>,
    readonly graphicActive:Graphic | null,
}