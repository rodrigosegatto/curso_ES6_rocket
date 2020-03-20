class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class ToDoList extends List{
    constructor(){
        //Super sempre irá herdar os objetos da classe Pai. 
        super();
        //E abaixo podemos definir novos objetos específicos da classe filho
        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();