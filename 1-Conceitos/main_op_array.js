//Operações com array no ES6

const arr = [1,2,4,5,8,10];

//Uma espécie de foreach, porém, ao passar por cada item do array,
//irá montar e retornar um novo array
const newArr = arr.map(function(item,index){
    return item + index;
});

console.log(newArr);

//Executa uma ação para cada item do array
//O primeiro valor acumula o retorno e no final ele retornará o resultado
const sum = arr.reduce(function(total,next){
    return total+next;
});

console.log(sum);

//retorna um array com os valores pares
//Para cada item percorrido no array, retorna se a condição for verdadeira
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//retona algum valor se verdadeiro, ou retornará Undefined
//Basicamente varre os itens do array e verifica a condição passada
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);