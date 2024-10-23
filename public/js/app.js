const votosTotales = {
  1: 0,
  2: 0,
  3: 0,
};

function votar(candidatoId) {
  fetch('/votar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ candidatoId }),
  })
  .then(response => response.json())
  .then(data => {
    // Actualizar el conteo de votos en la interfaz
    votosTotales[candidatoId] = data.votos;
    document.getElementById(`resultado-${candidatoId}`).innerText = `Votos: ${votosTotales[candidatoId]}`;
  })
  .catch(error => console.error('Error:', error));
}
