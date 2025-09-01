//useRef
import { useRef } from "react";

export default function Formulario() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Formulario (useRef)</h2>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={enfocar}>Enfocar input</button>
    </div>
  );
}