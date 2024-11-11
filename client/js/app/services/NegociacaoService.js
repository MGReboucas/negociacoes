class NegociacaoService{

    constructor(){
        this._http = new HTTPService();
    }

    obterNegociacoesSemana(){
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(error => {
                console.log(error);
                reject('Não foi possivel obter as negociacoes da semana');
            }) 
        });
    }
    
    
    obterNegociacoesSemanaAnterior(){
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(error => {
                console.log(error);
                reject('Não foi possivel obter as negociacoes da semana anterior');
            }) 
        });
    }
     
    obterNegociacoesSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(error => {
                console.log(error);
                reject('Não foi possivel obter as negociacoes da semana anterior');
            }) 
        });
    }
}