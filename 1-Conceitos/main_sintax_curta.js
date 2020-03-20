const nome = 'Rodrigo';
const idade = 27;

//Sintaxe padrão
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Unimed'
}

//Sintaxe Curta de Objeto (Object Short Syntax)
//Quando a variavel é igual , não precisa informar duas vezes.
const usuario1 = {
    nome,
    idade,
    empresa: 'Unimed'
}

console.log(usuario1);