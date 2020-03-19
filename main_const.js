
//Variaveis constantes não podem ter novos valores atribuidos
const a = 1;

//No caso o código abaixo daria erro
//const  = 3; 

//Podem sofrer mutações, como no exemplo abaixo
//Estamos modificando o objeto e isto funcionaria mesmo sendo const
const usuario = {nome: 'Diego'}

usuario.nome = 'Cleiton';

console.log(usuario);