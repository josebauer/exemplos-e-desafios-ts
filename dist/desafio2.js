"use strict";
//Resposta desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Artriz"] = 0] = "Artriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let Maria = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let Roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
let Laura = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
let Carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
