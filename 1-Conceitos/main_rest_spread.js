
const usuario = {
    nome: 'Rodrigo',
    idade: 27,
    endereco: {
        cidade: 'Santo Ângelo',
        estado: 'RS'
    }
};

//REST Operator

//Os tres pontos (...) basicamente irão jogar em uma nova variável todo o resto (idade, endereco, etc...)
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5];

const [a, b, ...c] = arr;
console.log(a,b,c);

//Utilizando o Rest com functions
function soma(...params){
    return params.reduce((total,next) => total+next);
}

console.log(soma(1,2,3,4,5));

//------------------------------//

//SPREAD Operator

//Papel de propagar, de passar para outra estrutura de dados
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Passando dados de um objeto para outro, alterando apenas uma variavel
const usuario1 = {
    nome: 'Rodrigo',
    idade: 27,
    endereco: {
        cidade: 'Santo Ângelo',
        estado: 'RS'
    }
};

//Receberá todas as propriedades e somente terá o nome alterado
const usuario2 = {...usuario1, nome:'Alexandre'};
console.log(usuario2);