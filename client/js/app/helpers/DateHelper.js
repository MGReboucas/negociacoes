class DateHelper{                                                               //objeto criacao data

    constructor(){                                                              //constructor instanciado para se for criado algo dentro do objeto retornar automaticamente um novo erro
        throw new Error('Essa classe não pode ser instanciada');                //criando novo erro para classe não instanciada
    }

    static dataParaTexto(data){                                                 //metodo estatico que pega a data e tranforma em string para recuperar o metodo
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`   //retornando uma template string da data criado na DataHelper 
    }

    static textoParaData(texto){                                                //metodo estatico recebendo um texto 
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){                                 //if feito para testar tamanho da string criado no formato data
            alert('ERRO: Verifique sua data e tente novamente');                //caso o formato não for atendido criar um alert com o erro 
            throw new Error('Deve estar no formato aaaa-mm-dd');                //criando novo erro que que aparecerá no console
            
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));                                  //retorna uma nova data com o metodo separar toda vida que encontrar '-'
    }                                                                                                                   //percorrendo o map e recuperando item mais indice que o item subtraido
                                                                                                                        //pelo indice no modulo de 2
}