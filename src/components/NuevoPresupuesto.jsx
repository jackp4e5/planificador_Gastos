import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = (props) => {
  const { presupuesto, setPresupuesto, setIsValidBudget } = props;
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("no es un presupuesto valido");
      return;
    }
    setMensaje("");
    setIsValidBudget(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} id="form" className=" formulario">
        <div className="campo">
          <label htmlFor="form" className="capitalize">
            {" "}
            definir presupuesto
          </label>

          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade un Nuevo Presupuesto"
            value={presupuesto}
            onChange={({ target }) => setPresupuesto(Number(target.value))}
          />
        </div>

        <input className="rounded" type="submit" value="Añidir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};
export default NuevoPresupuesto;
