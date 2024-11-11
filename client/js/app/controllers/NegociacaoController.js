                                                                                //controlador de negociações 
class NegociacaoController{                                                     //responsavel por puxar os dados do index
    constructor(){                                                              //responsavel por pegar as variaveis do index
        let $ = document.querySelector.bind(document);                          // definindo a uma variavel para deixar o codigo menos verboso na puxada dos valores
        this._inputData = $('#data');                                           //puxando a data com o query selector do id no input
        this._inputQuantidade = $('#quantidade');                               //puxando a quantidade
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia')

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto')
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista apagada com sucesso';
    }

    adiciona(event){                                                            //função adiciona recebendo event como uma nova classe Negociacao
        event.preventDefault();                                                 //função para inpedir a pagina de recarregar apos o submi
        this._listaNegociacoes.adiciona(this._criaNegociacao());                //chamando metodo adiciona criado no objeto lista negociacoes
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();                                                //chamando metodo limpa formulario
        //console.log(this._listaNegociacoes.Negociacoes);                        //console.log de lista negociacoes executando o getter Negociacoes
    }

    importaNegociacoes(){
        let service = new NegociacaoService();

        Promise.all([
            service.obterNegociacoesSemana(), 
            service.obterNegociacoesSemanaAnterior(), 
            service.obterNegociacoesSemanaRetrasada()
        ]).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociacoes da semana importada com sucesso';
        }).catch(error => this._mensagem.texto = error);
        
        /*
        service.obterNegociacoesSemana()
            .then(negociacoes => { 
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana obtida com sucesso';
            })
            .catch(error => this._mensagem.texto = error);

        service.obterNegociacoesSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociaçoes da semana anterior obtida com sucesso';
            })
            .catch(error => this._mensagem.texto = error);
        
        service.obterNegociacoesSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociaçoes da semana retrasada obtida com sucesso';
            })
            .catch(error => this._mensagem.texto = error);
        */
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