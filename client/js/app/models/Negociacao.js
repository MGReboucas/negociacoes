class Negociacao{                                                               //essa classe é responsavel por criar o objeto com os atributos
                                                                                //o _ nos this funcionam como uma forma de deixar atributo privado e dizer ao desenvolvedor que so ele podera acessa-lo 
    constructor(data, quantidade, valor){                                       //recebendo data, quantidade, e valor
        this._data = new Date(data.getTime());                                  
        this._quantidade = quantidade;                                          //criando variavel quantidade e recebendo variavel quantidade
        this._valor = valor;                                                    //criando variavel valor e recebendo variavel valor
        Object.freeze(this);                                                    //congelando objeto para que não possa ser alterado
    }                                                                           //podera ser testado com o Object.isFrozen() retornando true or false
    
                                                                                //dessa maneira definidor com o get "atributo" (separado) transformando em um atributo que conseguimos pegar ele como um metodo
                                                                                //ou seja, gerando um getter

    get volume(){                                                               //metodo retorna volume
        return this._quantidade * this._valor;                                  //retornando quantidade * valor = volume
    }

    get data(){                                                                 //metodo data
        return new Date(this._data.getTime());                                  //feito dessa maneira a data não podera ser setada no escopo global tornando assim blindado
    }

    get quantidade(){                                                           //metodo quantidade
        return this._quantidade;                                                //aqui estou retornando diretamente quantiadde recebida no construtor
    }

    get valor(){                                                                //metodo valor
        return this._valor;                                                     //retornando diretamente valor recebida no construtor
    }
}