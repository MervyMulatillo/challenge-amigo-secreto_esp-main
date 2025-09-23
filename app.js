// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Simple "Amigo Secreto" logic
// Estado
const amigos = [];

// Elementos del DOM
const $input = document.getElementById('amigo');
const $lista = document.getElementById('listaAmigos');
const $resultado = document.getElementById('resultado');

// Renderizar la lista de amigos
function renderLista() {
  $lista.innerHTML = '';
  amigos.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    $lista.appendChild(li);
  });
  // limpiar resultado cuando cambia la lista
  $resultado.innerHTML = '';
}

// Añadir amigo
function agregarAmigo() {
  const nombre = ($input.value || '').trim();

  if (!nombre) {
    alert('Por favor, ingresa un nombre válido.');
    $input.focus();
    return;
  }

  // (Opcional) Evitar duplicados (descomenta si lo quieres estricto)
  const existe = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert('Ese nombre ya está en la lista.');
    $input.select();
    return;
  }

  amigos.push(nombre);
  renderLista();
  $input.value = '';
  $input.focus();
}

// Sorteo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    $input.focus();
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];

  // Mostrar como elemento de la lista de resultados (ul#resultado)
  $resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${ganador}</strong></li>`;
}

// Soporte Enter para añadir
$input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});

// Exponer funciones para los botones del HTML (onclick)
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;

function reiniciarLista() {
  amigos.length = 0;        // vacía el arreglo sin crear otro
  renderLista();            // refresca la UI (lista y resultado)
  $input.value = '';
  $input.focus();
}

// Exponer también esta función para usarla con onclick
window.reiniciarLista = reiniciarLista;
