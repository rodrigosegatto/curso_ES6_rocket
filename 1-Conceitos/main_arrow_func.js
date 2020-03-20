//Arrow Functions

const arr = [1,2,4,5,8,10];

//Formato padrão de utilização de arrays anônimos
const newArr = arr.map(function(item){
    return item*2;
});

console.log(newArr);

//Pode diminuir código com a seguinte sintaxe que utiliza arrow function (=>)
const newArr = arr.map(item =>{
    return item*2;
});

console.log(newArr);

//POde-se diminuir ainda mais, no caso deste exemplo, onde somente temos um retorno
//Não trabalhamos outras operações dentro da function
//Todas estas três opções fazem a mesma coisa
const newArr = arr.map(item => item*2);

console.log(newArr);

//Este é um outro exemplo de função anonima com arrow function
//Porém, para retorno de um objeto. Neste caso, temos de colocar os parenteses () entre os {}
const teste = () => ({nome:'diego'});
console.log(teste);