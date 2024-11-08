class NegociacoesView extends View{                                                          //objeto criado para visualização das tabelas que já foram criadas

    constructor(elemento){
        super(elemento);
    }

    template(model){                                                           //metodo a qual cria a tabela para receber as negociacoes
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
                    ${model.Negociacoes.map((n) =>                              //pegando variavel criada aqui e puxando o getter negociacao executando o metodo map que retorna 
                           `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>    
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                           </tr>
                        
                        `).join('')};
                </tbody>
                <tfoot>
                        <td colspan="3"></td>
                            <td>${model.Negociacoes.reduce((total, n) => total + n.volume, 0.0)
                        }</td>
                </tfoot>
            </table>
        `
    }
}
