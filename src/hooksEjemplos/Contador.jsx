//useState
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador (useState)</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
