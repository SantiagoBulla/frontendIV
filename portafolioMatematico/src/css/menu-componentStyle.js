import { css } from "lit-element";

export default css `
    :host {
        display: block;
        margin: 0;
        padding:0;
        font-family: sans-serif;
        font-size: 1rem;
    }
    .contenedor-header{
        width: 100vw;
        height: 15vh;
        border-bottom: 2px solid #8C4B45;
        display: flex;
        align-items: center;
        background-color: #4F5F73;
    }
    .titulo{
        width: 30vw;
        padding-left: 2rem;
        color: white;
    }

    .menu ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 70vw;
        margin-right:3rem;
    }

    .opciones{
        border: 1px solid white;
        border-radius: 2rem;
        padding: .6rem;
        cursor: pointer;
        background-color: #8C4B45;
        color: white;
    }

    .opciones:hover{
        border: .3rem solid #8C4B45;
        background-color: white;
        color: #8C4B45;
    }

    .contenedor-body{
        width: 100vw;
        height: 85vh;
        padding-top: 3rem;
    }
`