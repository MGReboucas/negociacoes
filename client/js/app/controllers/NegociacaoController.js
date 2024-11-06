                                                                                //controlador de negociações 
class NegociacaoController{                                                     //responsavel por puxar os dados do index
    constructor(){                                                              //responsavel por pegar as variaveis do index
        let $ = document.querySelector.bind(document);                          // definindo a uma variavel para deixar o codigo menos verboso na puxada dos valores

        this._inputData = $('#data');                                           //puxando a data com o query selector do id no input
        this._inputQuantidade = $('#quantidade');                               //puxando a quantidade
        this._inputValor = $('#valor');                                         //puxando valor
        this._listaNegociacoes = new ListaNegociacoes();                        //Criando novo objeto lista negociacao
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));     //criando novo objeto NegociacaoView recebendo o id criado na div

        this._negociacoesView.update(this._listaNegociacoes);                   //executando o metodo update(a lista de negociacoes) do negociacoesView
    }
    adiciona(event){                                                            //função adiciona recebendo event como uma nova classe Negociacao
        event.preventDefault();                                                 //função para inpedir a pagina de recarregar apos o submit

        this._listaNegociacoes.adiciona(this._criaNegociacao());                //chamando metodo adiciona criado no objeto lista negociacoes
        this._negociacoesView.update(this._listaNegociacoes);                   //chamando metodo de update(lista de negociacoes) criado no negociacoes view
        this._limpaFormulario();                                                //chamando metodo limpa formulario 

        console.log(this._listaNegociacoes.Negociacoes);                        //console.log de lista negociacoes executando o getter Negociacoes
    }

    _criaNegociacao(){                                                          //criando metodo cria negociacao 
        return new Negociacao(                                                  //criando um objeto Negociacao 
            DateHelper.textoParaData(this._inputData.value),                    //puxando DataHelper textoParaData(inserindo o inputdata.value)
            this._inputQuantidade.value,                                        //puxando valor da variavel quantidade para ser recebida na Negociaçao
            this._inputValor.value);                                            //puxando valor da variavel valor para ser recebida em Negociacao
    }

    _limpaFormulario() {                                                        //metodo limpa formulario 
        this._inputData.value = '';                                             //setando o input data com valor vazio
        this._inputQuantidade.value = 1;                                        //setando o input quantidade com valor 1 padrão
        this._inputValor.value = 0.0;                                           //setando o input valor como 0.0 padrão

        this._inputData.focus();                                                //colocando o foco no input data assim que limpar meu formulario
    }
}