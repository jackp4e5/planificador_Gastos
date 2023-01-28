import cerrarBtn from "../img/cerrar.svg";
import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";

const Modal = (props) => {
  const { 
      setModal,
      animarModal,
      setAnimarModal,
      guardarGasto,
      gastoEditar,
      setGastoEditar,
   } = props;

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha)
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los Campos Son Obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria,id,fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend className="capitalize">{gastoEditar.nombre ? 'Editar gasto' :  'nuevo gasto'}</legend>

        <div className="campo">
          <label className="capitalize" htmlFor="nombre">
            Nombre Gasto
          </label>

          <input
            type="text"
            id="nombre"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={({ target }) => setNombre(target.value)}
            autoComplete="off"
          />
        </div>
        <div className="campo">
          <label className="capitalize" htmlFor="cantidad">
            cantidad
          </label>

          <input
            type="number"
            id="cantidad"
            placeholder="Añade la Cantidad Del Gasto Ej: 4000"
            value={cantidad}
            onChange={({ target }) => setCantidad(Number(target.value))}
          />
        </div>
        <div className="campo">
          <label className="capitalize" htmlFor="categoria">
            categoria
          </label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={({ target }) => setCategoria(target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input className="rounded" type="submit" value={gastoEditar.nombre ? 'Editar Gasto' :  'Añidir Gasto'} />
      </form>
    </div>
  );
};
export default Modal;
