class Matematica{

    //Métodos estáticos não visualizam os demais objetos da classe. 
    //São geralmente utilizados para casos específicos onde tudo será 
    //tratado dentro do método, sem consulta externa
    static soma(a,b){
        return a+b;
    }

}

console.log(Matematica.soma(1,2));