var database = require("../database/config")
function cadastrar(pontos, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontos, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO pontuacao (pontos, fkUsuario) VALUES ('${pontos}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function ranking(){
    var instrucao = `SELECT usuario.nome AS nome, SUM(pontos.acertos) AS total_pontos
    FROM usuario
    JOIN pontos ON usuario.id = pontos.fkPonto
    GROUP BY usuario.nome
    ORDER BY total_pontos DESC;`
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    ranking
}