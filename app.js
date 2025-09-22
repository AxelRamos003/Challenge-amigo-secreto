// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// almacenar la lista de amigos
let amigos = [];

// Función para agregar a la lista un amigo
function agregarAmigo() {
    // Obtiene el elemento de entrada de texto
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value;

 
    if (amigo.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución si el campo está vacío
    }

    // Agrega el nombre al array de amigos
    amigos.push(amigo);

    // Obtiene el elemento de la lista para mostrar los nombres
    let lista = document.getElementById('listaAmigos');
    // Crea un nuevo elemento de lista para el amigo agregado
    let li = document.createElement('li');
    li.textContent = amigo;
    // Añade el elemento a la lista en el HTML
    lista.appendChild(li);

    // Limpia el campo de entrada después de agregar el nombre
    amigoInput.value = '';
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
    // Obtiene el elemento donde se mostrará el resultado
    let resultado = document.getElementById('resultado');

    // Valida si hay al menos un amigo en la lista para sortear
    if (amigos.length === 0) {
        resultado.textContent = 'Agrega al menos un amigo para sortear.';
        return;
    }

    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Selecciona el amigo aleatorio usando el índice
    let amigoSecreto = amigos[indiceAleatorio];

    // Muestra el resultado en el HTML
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;

    // Deshabilita el botón de "sortear" después de sortear
    document.querySelector('.button-draw').disabled = true;
}

// Función para reiniciar el juego
function reiniciar() {
    // Limpia el array de amigos
    amigos = [];
    // Limpia la lista de amigos en el HTML
    document.getElementById('listaAmigos').innerHTML = '';
    // Limpia el resultado del sorteo en el HTML
    document.getElementById('resultado').innerHTML = '';
    // Habilita el botón de "sortear"
    document.querySelector('.button-draw').disabled = false;
}
