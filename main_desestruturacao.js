
const usuario = {
    nome: 'Rodrigo',
    idade: 27,
    endereco: {
        cidade: 'Santo Ângelo',
        estado: 'RS'
    }
};

//Método tradicional de obter variaveis, uma por uma
const nome = usuario.nome;
const idade = usuario.idade;
const endereco = usuario.endereco.cidade;

//O ES6 com desestruturação permite fazer isto abaixo:
const {nome, idade, endereco: {cidade}} = usuario;

//Valores do objeto foram passadas às variaveis em uma só linha 
console.log(nome);
console.log(idade);

//Utilizando em funções: 
//Antigo
function mostraNome(usuario){
    console.log(usuario.nome,usuario.idade);
}
//Desestruturado
function mostraNome({nome,idade}){
    console.log(nome,idade);
}

mostraNome(usuario);
