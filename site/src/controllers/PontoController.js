var  PontoModel = require("../models/PontoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var ponto = req.body.pontoServer;
    var id = req.body.idServer;
    
    // var email = req.body.emailServer;
    // var senha = req.body.senhaServer;
  

    // Faça as validações dos valores
     console.log("iniciando insert")

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        PontoModel.cadastrar(id,ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    
    cadastrar
}