//Import de função normalmente
    //import {soma as somaFunction,sub} from './funcoes';

//import de função default
//Tem somente um método por default e podemos chama-lo através de qualquer nome
    //import somaFunction from './soma';


//Import de todas as funcoes do .js que poderão ser chamadas funcoes.soma()
    //import * as funcoes from './funcoes';

//console.log(somaFunction(1,2));
//console.log(sub(5,4));

//IMport de Classe
    //import ClasseUsuario from './funcoes';

    //ClasseUsuario.info();

//Utilização do axios para requisições com ES6
    import axios from 'axios';

    class Api {
        static async getUserInfo(username){
            try{
                const response = await axios.get(`https://api.github.com/users/${username}`);
                console.log(response);
            }catch(err){
                console.warn('Erro na API');
            }
        }
    }

    Api.getUserInfo('rodrigosegatto');