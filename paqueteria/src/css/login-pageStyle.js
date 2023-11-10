import { css } from "lit-element";

export default css`        
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    html{
        font-size: 16px;
    }
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container.cerrar{
        display: none;
    }

    .container-login{
        border: 1px solid #0d054b;
        border-radius: 10px;
        width: 65%;
        display: flex;
    }

    .login-body{
        width: 70%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        
    }

    .title{
        text-align: center;
        font-size: 1.2rem;
    }

    .google-log-in{
        border: 0.3px solid lightgray;
        border-radius: .5rem;
        padding: 3px 10px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .google-log-in .google-icon img{
        width: 50%;
        height: auto;
    }
    .google-log-in .google-text{
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

    .separate-section{
        font-size: .7rem;
        width: 60%;
        display: flex;
        justify-content: center;
        color: lightgray;
        font-weight: bold;
    }
    .separate-section hr{
        width: 20%; /* Hacer que el hr ocupe el ancho completo del contenedor */
        border: none; /* Eliminar el borde predeterminado del hr */
        border-top: 1px solid lightgray; /* Agregar un borde solo en la parte superior para simular una línea horizontal */
        margin: 8px 5px;
    }

    .login-inputs{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .login-inputs label{
        font-weight: bold;
    }

    .login-inputs input{
        height: 1.5rem;
        border: 1px solid rgb(165, 164, 164);
        border-radius: 5px;
        padding-left: .3rem;
    }
    .login-inputs input:focus{
        height: 1.5rem;
        outline: 1px solid rgb(139, 138, 138);
        border-radius: 5px;
    }

    .log-in-options{
        width: 60%;
        font-size: .8rem;
        display: flex;
        justify-content: space-between;
    }

    .log-in-options .stay-conected{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }

    .btn-login{
        width: 60%;
    }
    .btn-login  button{
        width: 100%;
        height: 100%;
        padding: .3rem;
        border: none;
        color: white;
        background-color: #ECB14A;
        border: 1px solid #f3ab2f;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-login  button:hover{        
        background-color: #0d054b;
        border: 1px solid #2a11e6;
        color: white;
    }

    .register-link p{
        color: lightgray;
        font-weight: 300;
    }

    .login-image{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .login-image img{
        width: 100%; /* Hacer que la imagen ocupe el 100% del ancho del contenedor */
        height: auto;
    }
`