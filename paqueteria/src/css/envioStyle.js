import { css } from "lit-element";

export default css`
body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
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
    width: 100%;
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
    width: 100px;
}

.option{
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
    color: #e9e7f7;
    font-size: 18px;
    width: 100%;
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

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #1d4c94;
}

.product {
    margin: 20px 0;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.product img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.product .product-details {
    margin-left: 20px;
    flex-grow: 1;
}

.product h2 {
    font-size: 20px;
    margin: 10px 0;
    color: #5276ac;
}

.product .details-button {
    background-color: #3483fa;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.product .details {
    margin: 10px 0;
}

.product h4 {
    margin: 0;
}

.container-envio{
    background-color: #0d054b ;
}

#mostrar.ver{
    display:none;
}

`