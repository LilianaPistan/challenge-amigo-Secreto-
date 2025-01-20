// El principal objetivo de este desafío es fortalecer
//  tus habilidades en lógica de programación. Aquí deberás desarrollar la
//  lógica para resolver el problema.
// Lista de nombres de los participantes
let nombres = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (nombres.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nombres.forEach((nombre, index) => {
        const elemento = document.createElement('li');
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert('Debe haber al menos dos participantes para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const asignaciones = [...nombres];

    for (let i = asignaciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [asignaciones[i], asignaciones[j]] = [asignaciones[j], asignaciones[i]];
    }

    nombres.forEach((nombre, index) => {
        const amigo = asignaciones[index];
        if (nombre === amigo) {
            sortearAmigo();
            return;
        }
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${nombre} -> ${amigo}`;
        resultado.appendChild(resultadoItem);
    });
}

