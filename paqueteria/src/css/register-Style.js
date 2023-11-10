import { css } from 'lit-element';

export default css `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
.container.cerrar{
    display: none;
}
.input-group{
    width: 100%;
    max-width: 450px;
    background-color: #0d054b;
    padding: 50px 60px 70px;
    text-align: center;
    border-radius:25px;
}
.input-group h1{
    color:white;
}
.litle-container{
    background-color: #0d054b;
    margin: 15px;
    border-radius:5px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
input{
    width: 100%;
    background: transaparent;
    border:0;
    padding:18px 15px;
    outline: none;
    color: black;
}
.cuenta{
    color:black;
}
.btn{
    width: 100%;
    height: 70px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btn button{
    align-items: center;
    font-size: 16px;
    background-color: #ECB14A;
    border: 1px solid #f3ab2f;
    cursor: pointer;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    transition: background 1s;
    color: white;
}
.btn button:hover{
    background-color: #4a4956;
    color: white;
}

#rol{
    background-color: white;
    border-radius:5px;
    width: 90%;
    height: 50px;
}

`