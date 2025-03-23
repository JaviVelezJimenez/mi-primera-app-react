import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={aumentar}>➕ Aumentar</button>
      <button onClick={disminuir}>➖ Disminuir</button>
      <button onClick={reiniciar}>🔄 Reiniciar</button>
    </div>
  );
}

export default Contador;
