function btnenviar(){
    alert("¡Muchas gracias por contactarme!\n\nPronto recibiras respuesta.")
}

function quiz(){
    var adivinanza;
    do {
        adivinanza = prompt("Ingresa la opción correcta para demostrar que no eres un robot.\n\n¿Por qué un libro no puede mantener un secreto?\n\na) Porque tiene muchas páginas.\nb) Porque siempre está abierto.\nc) Porque habla demasiado.\nd) Porque está lleno de palabras.");

        if (adivinanza !== "b") {
            alert("¡Mala cosa amigo robot!\n\nInténtalo de nuevo.")
            adivinanza
        } else {
            alert("¡Muy bien humano amigo!\n\nGracias por demostrar que eres un ser orgánico.")
            close;
        }
    } while(adivinanza !== "b");
}

function mostrar(){
    var textElement = document.getElementById('textoculto');
            if (textElement.style.display === 'none' || textElement.style.display === '') {
                textElement.style.display = 'block';
            } else {
                textElement.style.display = 'none';
            }
}

//limpia formulario
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    this.reset();
})