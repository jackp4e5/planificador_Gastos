import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";

import { formatearFecha } from "../helpers/generarId";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import Iconocomida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import Iconosalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: Iconocomida,
  casa: IconoCasa,
  gastos: IconoGastos,
  entretenimiento: IconoOcio,
  salud: Iconosalud,
  suscripciones: IconoSuscripciones,
};
const Gasto = ({ gasto,setGastoEditar,eliminarGasto }) => {
  const { categoria, nombre, cantidad, fecha,id } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}> Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
      onClick={() => eliminarGasto(id)}
      destructive={true}
      >
        {" "}
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria ">{categoria}</p>
              <p className="nombre-gasto capitalize ">{nombre}</p>
              <p className="fecha-gasto">
                Registrado el: <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="nombre-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
export default Gasto;
