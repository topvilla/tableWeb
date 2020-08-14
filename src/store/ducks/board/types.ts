

export enum BoardTypes{
    ADD_GRAPHIC = "board/ADD_GRAPHIC",
    SELECT_GRAPHIC = "board/SELECT_GRAPHIC ",
    UPDATE_GRAPHIC_SELECTED = "board/UPDATE_GRAPHIC_SELECTED ",


}

interface addGraphicAction {
    type:string,
    graphic:IGraphic | IContainer
}

interface selectGraphicAction {
    type:string,
    graphic:IGraphic | IContainer
}
interface updateGraphicSelected{
    type:string,
    graphic:IGraphic | IContainer
}

export type BoardActions = addGraphicAction | selectGraphicAction | updateGraphicSelected;


export interface IGraphic {
    id:string,
    width:number,
    heigth:number;
    visible:boolean,
    selected:boolean;
    type:string;
}


export interface IContainer extends IGraphic{
    graphisc:Array<IGraphic | IContainer>
}

export interface BoardState {
    readonly graphics:Array<IContainer | IGraphic>,
    readonly graphicActivi:IContainer | IGraphic | null,

}