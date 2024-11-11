class Bind{
    constructor(model, view, ...props){
        let proxy = ProxyFactory.Create(model, props, model => view.update(model));
        view.update(model); 
        return proxy;
    }

}