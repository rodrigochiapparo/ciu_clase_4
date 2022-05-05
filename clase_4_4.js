var lista = document.querySelectorAll(".racing > li")

for (var i = 0; i < lista.length; i++){
    lista[i].addEventListener("click",function(){
      (this.classList.toggle("prueba"))
        
    
    })
}