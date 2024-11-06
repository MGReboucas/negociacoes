class NegociacoesView{                                                          //objeto criado para visualização das tabelas que já foram criadas

    constructor(elemento){                                                      //constructor responsavel por receber NegociacoesView e atribui-lo a uma variavel
        this._elemento = elemento;                                              //variavel a qual a div foi recebida
    }

    _template(model){                                                           //metodo a qual cria a tabela para receber as negociacoes
        return `                                                                
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.Negociacoes.map((n) => {                            //pegando variavel criada aqui e puxando o getter negociacao executando o metodo map que retorna 
                        return `
                           <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>    
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                           </tr> 
                        `;
                    })};    
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }
    update(model){                                                              //metodo update executado no controlador recebendo um parametro 
        this._elemento.innerHTML = this._template(model);                       //puxando o inner html do elemento recebido no contructor e atribuindo o template (baseado no modelo)
    }
}
