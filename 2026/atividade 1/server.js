import express from "express";

const app = express();
const porta = 3000;

app.get("/", (request,response) => {
    response.send("ola mundo!");
});

app.listen(porta, (request,response)=> {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
}
);