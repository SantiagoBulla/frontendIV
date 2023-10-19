import { css } from "lit-element";

export default css `

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
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .button{
                padding-right:1rem;
                padding-bottom:1rem;
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
            .main{
                width: 35vw;
                height: 10vw;
                display: grid; 
                grid-template-columns: repeat(6, 1fr);
                margin-bottom: 2rem;
                padding-top: 5rem;
            }
            .one {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 1 / 3;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
                margin-right: 1rem;
            }
            .two {
                grid-column: 1 /3 ;
                grid-row: 3 / 7;
                display: flex;
                justify-content: center;
                align-items:start;
                padding-top: .8rem;
            }
            .three {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 3/5;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
                margin-right: 1rem;
            }
            .four {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 3/5;
                grid-row: 3/7;
                padding-top: .8rem;
                
            }
            .five {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 5/7;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
            }
            .six {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 5/7;
                grid-row: 3/7;
                padding-top: .8rem;
                
            }
            .valor{
                width: 7rem;
            }
            #operacion{
                width: 12rem;
            }

`