const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Professora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 24,
    profissao: Profissao.Atriz
}

const joao: Estudante = {
    nome: 'João',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'João',
    idade: 28,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);