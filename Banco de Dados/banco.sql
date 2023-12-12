CREATE DATABASE cruzada;

USE cruzada;

CREATE TABLE usuario(
id INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);


CREATE TABLE pontos(
idPonto INT PRIMARY KEY auto_increment,
acertos INT,
fkPonto INT,
CONSTRAINT fkP FOREIGN KEY (fkPonto)
	REFERENCES usuario(id)
);


SELECT usuario.nome AS nome, SUM(pontos.acertos) AS total_pontos
    FROM usuario
    JOIN pontuacao ON usuario.id = pontos.fkUsuario
    GROUP BY usuario.nome
    ORDER BY total_pontos DESC;
