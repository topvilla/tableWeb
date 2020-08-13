

export enum CanvasTypes{
    MOVE_MOUSE = "canvas/MOVE_MOUSE"
}


export interface moveMouseAction{
    type:CanvasTypes.MOVE_MOUSE,
    x:number,
    y:number
}
export type CanvasActionTypes = moveMouseAction;


export interface MouseCoordinate{
    x:number,
    y:number
}

export interface CanvasState {
    readonly mouseCoordinate:MouseCoordinate
}