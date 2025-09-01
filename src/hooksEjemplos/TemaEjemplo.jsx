//useContext
import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

function BotonTema() {
  const { oscuro, toggleTema } = useContext(TemaContext);
  return (
    <button onClick={toggleTema}>
      Cambiar a {oscuro ? "Claro" : "Oscuro"}
    </button>
  );
}

export default function TemaEjemplo() {
  const [oscuro, setOscuro] = useState(false);
  const toggleTema = () => setOscuro(!oscuro);

  return (
    <TemaContext.Provider value={{ oscuro, toggleTema }}>
      <div style={{ background: oscuro ? "#222" : "#eee", color: oscuro ? "#fff" : "#000", padding: "1rem" }}>
        <h2>Tema (useContext)</h2>
        <BotonTema />
      </div>
    </TemaContext.Provider>
  );
}
