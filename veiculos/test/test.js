let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let expect = chai.expect;

// Estilo de teste
chai.should();
chai.use(chaiHttp);

describe('Api teste', () => {

    /**
     * Teste da rota GET
     */
    describe("GET /api/veiculos", () => {
        it("Este teste RETORNA todos os veículos", (done) => {
            chai.request(server)
                .get("/api/veiculos")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                done();
                });
        });
    });

    /**
     * Teste da rota GET por ID
     */
    describe("GET /api/veiculos/:id", () => {
        it("Este teste RETORNA o veículo por ID", (done) => {
            const veiculoId = 1;
            chai.request(server)
                .get("/api/veiculos/"+veiculoId)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                done();
                });
        });
    });

    /**
     * Teste da rota POST
     */
    describe("POST /api/veiculos", () => {
        it("Este teste INCLUI o veículo", (done) => {
            const veiculo = {
                placa: "JJJ0000",
                chassi: "9999",
                renavam: "5555",
                modelo: "Teste",
                marca: "TESTE",
                ano: "2021"
            };
            chai.request(server)
                .post("/api/veiculos")
                .send(veiculo)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                done();
                });
        });
    });

    /**
     * Teste da rota PUT
     */
    describe("PUT /api/veiculos/:id", () => {
        it("Este teste ALTERA o veículo", (done) => {
            const veiculoId = 1
            const veiculo = {
                placa: "PUT1111",
                chassi: "8888",
                renavam: "4444",
                modelo: "Put",
                marca: "PUT",
                ano: "2021"
            };
            chai.request(server)
                .put("/api/veiculos/"+veiculoId)
                .send(veiculo)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                done();
                });
        });
    });
    /**
     * Teste da rota DELETE
     */
     describe("DELETE /api/veiculos/:id", () => {
        it("Este teste EXCLUI o veículo", (done) => {
            const veiculoId = 1            
            chai.request(server)
                .delete("/api/veiculos/"+veiculoId)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                done();
                });
        });
    });
});

