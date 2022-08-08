//Resposta desafio 2

enum Profissao {
    Artriz,
    Padeiro
}

type Aluno = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let Maria: Aluno = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let Roberto: Aluno = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
    
let Laura: Aluno = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
    
let Carlos: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};