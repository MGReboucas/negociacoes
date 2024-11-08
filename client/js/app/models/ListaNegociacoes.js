class ListaNegociacoes{                                                         //aqui tenho o modelo do ojeto lista negociacoes 

    constructor(armadilha){                                                              //contructor da lista negociacoes
        this._negociacoes = [];
        this._armadilha = armadilha;                                                 //criando variavel que vai receber a negociacao dentro de uma array
    }

    adiciona(negociacao){                                                       //metodo que recebe o cria negociacao
        this._negociacoes.push(negociacao);                                    //dando push na negociacao recebida pelo cria negociacao
        this._armadilha(this);
        
    }
    
    get Negociacoes(){                                                          //getter responsavel por 
        return [].concat(this._negociacoes);                                    //retorna o array concatenado com o array negociacoes
    }
    
    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
    }
}