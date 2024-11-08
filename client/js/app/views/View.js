class View {
    
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('O metodo template tem que ser inplementado ');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

}