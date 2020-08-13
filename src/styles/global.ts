import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    html, body , #root{
        height:100%;
    }
    .App{
        height:100%;
    }
    body {
        font: 100% 'Roboto',sans-serif;
        -webkit-font-smmothing: antialiased !important;
        background-color:lightgray;
        overflow:hidden;
    }

    ul{
        list-style:none;
    }


`