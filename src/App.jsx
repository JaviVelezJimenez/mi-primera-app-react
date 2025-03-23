//Esto es un commint desde el visual estudio sin comandos
import { useState } from 'react';

// Lista de anécdotas
const anecdotes = [
  'Si no puedes hacerlo bien, al menos haz que luzca bien.',
  'La depuración es como ser el detective de una novela escrita por ti mismo.',
  '¡Funciona en mi máquina!',
  'Hay dos maneras de escribir software libre de errores; solo la tercera funciona.',
  'La experiencia es el nombre que todos dan a sus errores.',
  'El código nunca miente, los comentarios a veces sí.'
];

function App() {
  // Estado para saber cuál anécdota se está mostrando (posición en el array)
  const [indiceActual, setIndiceActual] = useState(0);

  // Estado para guardar cuántos votos tiene cada anécdota (array de números)
  const [votos, setVotos] = useState(new Array(anecdotes.length).fill(0));

  // Cambia a una anécdota aleatoria
  const siguienteAnecdota = () => {
    const aleatorio = Math.floor(Math.random() * anecdotes.length);
    setIndiceActual(aleatorio);
  };

  // Suma un voto a la anécdota actual
  const votar = () => {
    const nuevosVotos = [...votos]; // copia del array original
    nuevosVotos[indiceActual] += 1; // suma 1 al voto actual
    setVotos(nuevosVotos); // actualiza el estado
  };

  // Encuentra la anécdota con más votos
  const indiceMasVotada = votos.indexOf(Math.max(...votos));

  return (
    <div>
      <h1>Anecdota del día</h1>

      {/* Mostrar la anécdota actual y sus votos */}
      <p>{anecdotes[indiceActual]}</p>
      <p>Tiene {votos[indiceActual]} votos</p>

      {/* Botones de votar y pasar a otra anécdota */}
      <button onClick={votar}>Votar</button>
      <button onClick={siguienteAnecdota}>Siguiente</button>

      <h2>Anecdota con más votos</h2>

      {/* Mostrar la anécdota más votada y sus votos */}
      <p>{anecdotes[indiceMasVotada]}</p>
      <p>Con {votos[indiceMasVotada]} votos</p>
    </div>
  );
}

export default App;
