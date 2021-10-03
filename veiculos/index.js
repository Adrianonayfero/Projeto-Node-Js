// Importando framework Express
const express = require('express');
// Inicializando framework
const app = express();
// Definindo tipo de atributo de entrada
app.use(express.json());

// Definindo contate para armazemar dados de veículos
const veiculos = [
    { 
        "id": 0,
        "placa": "JIN0814",
        "chassi": "QWE1234",
        "renavam": "1234",
        "modelo": "207",
        "marca": "Peugeot",
        "ano": "2010"
    },
    { 
        "id": 1,
        "placa": "BUZ6737",
        "chassi": "BA22",
        "renavam": "0037",
        "modelo": "BRASILIA",
        "marca": "VW",
        "ano": "1976"
    },
    { 
        "id": 2,
        "placa": "JKU9091",
        "chassi": "9BFZ",
        "renavam": "5678",
        "modelo": "ESCORT",
        "marca": "FORD",
        "ano": "1993"
    }
];

// GET - Listar veículos
app.get("/api/veiculos" , (request,response) => {
    response.send(veiculos);
});

// GET - Listar veículo pelo ID
app.get("/api/veiculos/:id" , (request,response) => {
    const veiculoId = request.params.id;
    const veiculo = veiculos.find(veiculo => veiculo.id === parseInt(veiculoId));
    //se o Id do veículo não existir exibe msg
    if(!veiculo){
        return response.status(404).send("Veículo não encontrado.");
    }
    response.send(veiculo);
});

// POST - Inclir veículo
app.post("/api/veiculos" , (request,response) => {
    const veiculoNovo = request.body;
    if(!veiculoNovo){
        return response.status(400).send("Erro ao incluir veículo");
    }
    const veiculo = {
        id: veiculos.length+1,
        placa: request.body.placa,
        chassi: request.body.chassi,
        renavam: request.body.renavam,
        modelo: request.body.modelo,
        marca: request.body.marca,
        ano: request.body.ano
    };
    veiculos.push(veiculo);
    response.status(201).send(veiculo);
});

// PUT - Alterar veículo pelo ID
app.put("/api/veiculos/:id" , (request,response) => {
    const veiculoId = request.params.id;
    const veiculo = veiculos.find(veiculo => veiculo.id === parseInt(veiculoId));
    //se o Id do veículo não existir exibe msg
    if(!veiculo){
        return response.status(404).send("Veículo não encontrado.");
    }

    veiculo.placa = request.body.placa,
    veiculo.chassi = request.body.chassi,
    veiculo.renavam = request.body.renavam,
    veiculo.modelo = request.body.modelo,
    veiculo.marca = request.body.marca,
    veiculo.ano = request.body.ano

    response.send(veiculo);
});

// DELETE - Exluir veículo pelo ID
app.delete("/api/veiculos/:id" , (request,response) => {
    const veiculoId = request.params.id;
    const veiculo = veiculos.find(veiculo => veiculo.id === parseInt(veiculoId));
    //se o Id do veículo não existir exibe msg
    if(!veiculo){
        return response.status(404).send("Veículo não encontrado.");
    }

    const index = veiculos.indexOf(veiculo);
    veiculos.splice(index,1);
    response.send(veiculo);
});

// Definindo porta de acesso
const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Rodando na Porta ${port}...`));