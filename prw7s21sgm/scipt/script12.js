windows.addEventListener("load",function(){
    //aqui va todo el codigo
    formulario=this.document.getElementById("formulario");
    formulario.addEventListener("submit",function(e){
        preventDefault();
    });
});