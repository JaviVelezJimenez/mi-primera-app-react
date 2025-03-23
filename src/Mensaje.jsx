function Mensaje(props) {
    if (props.mostrar) {
      return <p>Este es un mensaje visible ✨</p>;
    } else {
      return <p>Mensaje oculto 😶</p>;
    }
  }
  
  export default Mensaje;
  