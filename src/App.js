import './estilos/App.css';
import ParadiseLove from './img/Logo-texto2.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    let number = input.toString().slice(-1);
    if(number === '+' || number === '-' || number === '*' || number === '/'){
      alert('Falta el segundo valor');
    }else{
      if(input){
        if(isNaN(input)){
          setInput(evaluate(input));
        }else{
          setInput(input);
        }
      }else{
        alert('Ingreses valores por favor');
      }
    }
    
  };
  return (
    <div className='App'>
      <div className='paradise-love-contenedor'>
        <img 
          src={ParadiseLove}
          className='paradise-love-logo' 
          alt="logo paradise love" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={() => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
