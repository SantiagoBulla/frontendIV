import { css } from "lit-element";

export default css`
            :host {
                display: block;
                margin: 0;
                padding:0;
                font-family: sans-serif;
                display:flex;
                justify-content: center;

            }
            .contenedor{
                width: 40vw;
                margin-bottom:2rem;
            }
            .header{
                background-color:#4F5F73;
                padding:1.5rem;
            }
            .header h3{
                color: #F2F2F2;
            }
            form{
                background-color: #CCC4C0;
            }
            .button{
                padding-right:1rem;
                padding-bottom:2rem;
                display:flex;
                justify-content:end;
                background-color: #CCC4C0;
                gap: .5rem;
            }
            .button button{
                border: none;
                border: 2px solid #8C4B45;
                color:white;
                padding: .5rem;
                border-radius: .5rem;
                background-color: #8C4B45;
                cursor:pointer;
            }
            .pantalla{
                margin:.3rem;
                padding: .5rem;
                border-radius:.5rem;
                background-color:white;
            }
            .rectangulo {
                width: 400px;
                height: 200px;
                background-color: #4f81bd;
            }
            .main{
                width: 40vw;
                height: 20vw;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                padding-top:2rem;
            }
            .one {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items:end;
                grid-column: 1 / 3;
                grid-row: 1/2;
                gap:.5rem;
                /* border: solid 1px blue; */
            }
            .one input, .three input{
                width: 6rem;
                height: 1rem;
                border: none;
                border-radius:.3rem;
                border-bottom: 1px solid #8C4B45;
                border-left: 1px solid #8C4B45;
                border-right: 1px solid #8C4B45;
                outline: none;
                padding: 5px 10px;
                color: #344050;
                background-color: #CCC4C0;
            }
            .one label{
                padding-right:1.8rem;
            }
            .two {
                grid-column: 3 / 7;
                grid-row: 1 / 2;
                display: flex;
                justify-content: center;
                align-items:center;
                /* border: solid 1px yellow; */
                padding-right:6rem;
                padding-left:1.5rem;
            }
            .four {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 1/7;
                grid-row: 2/3;
                gap: .5rem;
                padding-left: 10rem;
            }
            .four input{
                width: 13rem;
                height:1rem;
                border: none;
                border-radius:.3rem;
                border-bottom: 1px solid #8C4B45;
                border-left: 1px solid #8C4B45;
                border-right: 1px solid #8C4B45;
                outline: none;
                padding: 5px 10px;
                color: #344050;
                background-color: #CCC4C0;
            }

`