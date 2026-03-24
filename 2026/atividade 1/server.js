import express from "express";

const app = express();
const porta = 3000;

app.get("/", (request,response) => {
    response.send("ola mundo!");
});

app.get("/usuario", (request,response) => {
    response.json({
        id:1,
        nome:"mark",
        profissao:"editor de video"
    

    });
});

app.get("/pastel", (request,response) => {
    response.json([
        {
            id:1,
            tipo:"flango",
        },
        {
            id:2,
            tipo:"caine",
        },
        {
            id:2,
            tipo:"atum",
        }

    ]
    );
});

app.listen(porta, (request,response)=> {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
}
);
