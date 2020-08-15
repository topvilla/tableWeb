
//types
export enum BoardTypes{
    ADD_GRAPHIC = "board/ADD_GRAPHIC",
    SELECT_GRAPHIC = "board/SELECT_GRAPHIC ",
    UPDATE_GRAPHIC_SELECTED = "board/UPDATE_GRAPHIC_SELECTED ",
    UPDATE_GRAPHIC = "board/UPDATE_GRAPHIC ",
    HIDDEN_GRAPHIC = "board/HIDDEN_GRAPHIC "
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

export type BoardActions = addGraphicAction | selectGraphicAction 
| updateGraphicSelected | hiddenGraphic | updateGraphic;

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

export type Graphic = IGraphic | IContainer;

export interface BoardState {
    readonly graphics:Array<Graphic>,
    readonly graphicActive:Graphic | null,

}