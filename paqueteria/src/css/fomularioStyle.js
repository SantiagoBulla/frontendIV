import {css} from "lit-element";
export default css `
 
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-register{
    width: 100%;
    max-width: 450px;
    background-color: #0d054b;
    padding: 50px 60px 70px;
    text-align: center;
    border-radius:25px;
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
}
.title{
    color:aliceblue;
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
button:hover{
    background-color:#9ac9f5;
}

button{
    width: 90%;
    height: 50px;
}
.container-header{
    background-color: #0d054b;
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: space-between;
}

#mostrar.ver{
    display:none;
}
.option{
    color: #e9e7f7;
    font-size: 18px;
    padding: 3%;
}

.options{
    display: flex;
    align-items: center;
    margin-left: 65%;
    gap: 40px;
}

.option:hover{
    border: 2px solid #4a4956;
    border-radius: 5px;
    background-color: #4a4956;
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
.logo{
    width: 125px;
    height: 125px;
    margin-left: 30%;
}

`