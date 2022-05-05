// Manipulando texto
var prueba = document.querySelector("div");
//prueba.style.height = "100"
//prueba.style.width = "100"
//prueba.style.backgroundColor = "blue"
//prueba.classList.add("square")
//console.log(prueba.classList.remove("square"))
console.log(prueba.classList.toggle("square"))

//Shuffle!

//var element = document.getElementById("source")
//var destination = document.getElementById("destination")

//var id_source = element.textContent
//var id_desti = destination.textContent

//destination.setAttribute("destination","id_source")

var source = document.querySelector("#source")
var destination = document.querySelector("#destination")

destination.textContent = source.textContent


