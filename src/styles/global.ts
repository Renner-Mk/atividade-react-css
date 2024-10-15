import { createGlobalStyle } from "styled-components"; 

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:Arial, Helvetica, sans-serif ;
    }

    ul{
        display:flex;
        list-style-type:none;
    }

    li{
        margin-right:15px;
    }
    a{
        text-decoration:none;
        color: #156fff;
        font-weight:600;
        font-size:15px;
    }

    small{
        display:inline-block;
        color:rgba(50,50,50, .8);
        margin-top: 5px;
    }

`