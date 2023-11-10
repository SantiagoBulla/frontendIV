import { css } from "lit-element";

export default css 
`
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

.options{
    display: flex;
    align-items: center;
    margin-left: 65%;
    gap: 40px;
}

.option{
    color: #e9e7f7;
    font-size: 18px;
    padding: 3%;
}

.option:hover{
    border: 2px solid #4a4956;
    border-radius: 5px;
    background-color: #4a4956;
}

.container-table{
    display: flex;
    justify-content: center;
    align-items: center;

}

table{
    border: 2px solid #0d054b;
    border-radius: 5px;
}

td{
    padding: 20px;
}
`