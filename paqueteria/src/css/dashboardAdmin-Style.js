import { css } from "lit-element";

export default css`
    body{
    padding: 0;
    margin: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#mostrar.ver{
    display: none;
}

.container-header{
    background-color: #0d054b;
    display: flex;
    width: 100%;
    height: 15%;
}

.logo{
    width: 125px;
    height: 125px;
    margin-left: 30%;
}

.imgBig{
    width: 100%;
    height: 600px;
}

.options{
    display:inline-flex;
    align-items: center;
    margin-left: 60%;
    gap: 50px;
}

.option{
    color: #e9e7f7;
    font-size: 18px;
}

.option:hover{
    border: 2px solid #4a4956;
    border-radius: 5px;
    background-color: #4a4956;
}

.titleStep{
    margin-left: 6%;
}

.container-step{
    display: flex;
    gap: 30px;
    justify-content: center;
}

.step{
    border: 2px solid #0d054b;
    border-radius: 6px;
    width: 300px;
    text-align: center;
}

.imgStep{
    width: 220px;
    height: 180px;
}

h3{
    font-size: 25px;
}

.container-notices{
    display: flex;
    justify-content: center;
    gap: 30px;
}

.img-notices{
    border: 2px solid #0d054b;
    border-radius: 6px;
    
    text-align: center;
}

.notice{
    text-align: center;
}

hr{
    width: 40%;
    border: 1px solid #4a4956;
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