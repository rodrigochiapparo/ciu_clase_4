var body = document.querySelector("body")
var imagen = document.querySelector("img")

body.addEventListener("mousemove", function(){
imagen.top = imagen.clientY
imagen.left = imagen.clientX

})

imagen.addEventListener("mousemove", function(){
   body.classList.add("cursor")
    })