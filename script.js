document.getElementById("miBoton").addEventListener("click",function(){
    const input = document.getElementById("Nombre");
    const nombre = input.value.trim()

    if (nombre){
     const p = document.createElement("p") 
     p.textContent= `! Hola ${nombre} Gracias por contactarme`
     document.getElementById("Mensaje").appendChild(p)
     input.value=" "
    }

})