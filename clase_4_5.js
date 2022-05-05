var boton1 = document.querySelector("#boton1")
var boton2 = document.querySelector("#boton2")
var boton2 = document.querySelector("#boton3")

var imagen1 = document.querySelector("#img1")
var imagen2 = document.querySelector("#img2")
var imagen3 = document.querySelector("#img3")

boton1.addEventListener("click",function(){
    imagen1.classList.toggle("oculto")
})

boton2.addEventListener("click",function(){
    imagen2.classList.toggle("oculto")
})

boton3.addEventListener("click",function(){
    imagen3.classList.toggle("oculto")
})
