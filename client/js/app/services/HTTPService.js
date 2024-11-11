class HTTPService{
    get(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();                                     //crio um novo xml http request
                xhr.open('GET', url);                                           //operação que eu qoero realizar no servidor é get e digo o caminho do servidor ir atras
                    xhr.onreadystatechange = () => {                            //se o estado das requisições do servidor for mudado crio uma aerow function
                        if(xhr.readyState == 4){                                //chamada com o servidor para saber se a requisição foi concluida e a resposta está pronta
                            if(xhr.status == 200){                              //verifico se o status do meu xhr é 200 uma operação 
                                resolve(JSON.parse(xhr.responseText));
                            }else{
                                reject(xhr.responseText);
                            }
                        }
                    }
            xhr.send();
        });
    }
}