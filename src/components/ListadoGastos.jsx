import Gasto from "./Gasto";

const ListadoGastos = (props) => {
  const { 
     gastos,
     setGastoEditar,
     eliminarGasto,
     filtro,
     gastosFiltrados 

  } = props;

  return (
    <div className="listado-gasto contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No Hay Gastos Aun"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No Hay Gastos Aun"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default ListadoGastos;
