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
            .campos{
                padding:1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap:.8rem;
            }
            .campos input{
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
            .campos input::placeholder{
                color:#344050;
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
`