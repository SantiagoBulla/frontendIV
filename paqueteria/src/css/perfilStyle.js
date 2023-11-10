import { css } from "lit-element";

export default css `

.container-header{
    background-color: #0d054b;
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: 15%;
}

#quitar.cerrar{
    display: none;
}

.logo{
    width: 125px;
    height: 125px;
    margin-left: 30%;
}
.option{
    color: #e9e7f7;
    font-size: 18px;
}
.options{
    align-items: center;
    gap: 50px;
    display: flex;
    margin-right: 2%;
}
.option:hover{
    border: 2px solid #4a4956;
    border-radius: 5px;
    background-color: #4a4956;
}
.form{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-form{
    background-color: #0d054b;
    width: 20%;
    height: 50vh;
    color: antiquewhite;
    font-size: 20px;
    padding: 2%;
}
.container-imgPerfil{
    display: flex;
    justify-content: center;
}
.imgPerfil{
    width: 30px;
    height: 30px;
}
input{
    display: block;
    background-color: #0d054b;
    border: 1px solid #e9e7f7 ;
    height: 20px;
    color: #e9e7f7;
    width: 100%;
    
}
.container-info{
    background-color: #0d054b;
    height: 100px;
    color: #e9e7f7;
    text-align: center;
}
.container-author{
    background-color: #4a4956;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

