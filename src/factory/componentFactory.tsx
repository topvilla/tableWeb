import React from 'react';
import { Graphic } from "../store/ducks/board/types";
import BoardContainer from "../components/container";

export function componentFactory(){

    function createConteiner(conteiner:Graphic){
        return <BoardContainer  container = {conteiner} />;
    }

    return {
        createConteiner:createConteiner
    }

}