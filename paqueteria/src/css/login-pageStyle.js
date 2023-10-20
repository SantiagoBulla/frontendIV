import { css } from "lit-element";

export default css`

        :host {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                background: linear-gradient(#cececf, #73727c, #5144b4 );
            }
            .container-login{
                width: 50%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 10rem;
            }
            .titulo{
                background-color: #0d054b ;
                color: #e9e7f7 ;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10rem 10rem 0rem 0rem;
            }

            .login-body{
                background-color: #4a4956 ;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .login-footer{
                background-color: #4a4956 ;
                width: 100%;
                display: flex;
                justify-content: end;
                align-items: center;
                border-radius: 0rem 0rem 10rem 10rem;
            }

            .login-footer button{
                margin-right: 2rem;
                margin-bottom: 2rem;
                border-radius: .5rem;
                padding: .5rem;
                border: none;
                cursor: pointer;
                color: #0d054b;
            }
            .login-footer button:hover{
                background-color: #0d054b;
                color: white;
            }
            .user{
                width: auto;
                height: 50%;
                padding: 2rem 4rem;
            }
            .password{
                width: auto;
                height: 50%;
                padding: 2rem 4rem;
            }

            .user input, .password input{
                all: unset;
                width: 12rem;
                border: none;
                background-color: transparent;
                border-bottom: 1px solid #0d054b;
                /* border-left: 1px solid #0d054b; */
                /* border-right: 1px solid #0d054b; */
                border-radius: .3rem;
                color: #e9e7f7;
                font-size: 0.6em;
                padding: 0rem .5rem;
            }
            
            .user label, .password label{
               color: #e9e7f7;
            }

            .user input::placeholder , .password input::placeholder{
                color: #e9e7f7;
                text-align: center;
            }

`