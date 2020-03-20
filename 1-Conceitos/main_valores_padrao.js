
//Utilizar valores padrões para as variaveis recebidas pelas funções

const soma = (a = 1, b = 5) => a + b;

//INdependente de passar um parâmetro ou nenhum, ele terá valores para somar
console.log(soma());
console.log(soma(1));