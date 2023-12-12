var express = require("express");
var router = express.Router();

var PontoController = require("../controllers/PontoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    PontoController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     usuarioController.autenticar(req, res);
// });

module.exports = router;