var boton = document.querySelector("button")
var parrafo = document.querySelector("p") 
var body = document.querySelector("body")






var seEjecutaEnEvento = boton.addEventListener("click", function(){
    parrafo.textContent = "BEEP"
    body.insertAdjacentHTML("beforeend","<p>Racing</p>")
    parrafo.classList.toggle("color")

})

boton.seEjecutaEnEvento