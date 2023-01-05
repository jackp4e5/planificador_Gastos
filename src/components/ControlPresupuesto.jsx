import { useEffect, useState } from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos,setGastos,setPresupuesto,setIsValidBudget}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [ porcentaje, setPorcentaje] = useState(0);


  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total,0);
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(1);
setTimeout(() => {
  setPorcentaje(nuevoPorcentaje);
  
}, 600);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
     const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
      if (resultado) {
       setGastos([]);
       setPresupuesto(0)
       setIsValidBudget(false)
        
      }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
              pathColor:  porcentaje > 100 ? '#DC2626' : '#3B82F6',
              trailColor: '#F5F5F5',
              textColor:  porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          text={`${porcentaje}%  Gastado`}
          value={porcentaje} 
          
          />
      </div>
      <div className="contenido-presupuesto">
        <button type="button" className="reset-app" onClick={handleResetApp}>Reset App</button>
        <p>
          <span>Presupuesto:</span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ?'negativo' : ''}`}>
          <span>Disponible:</span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado:</span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};
export default ControlPresupuesto;
