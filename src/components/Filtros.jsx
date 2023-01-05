import { useEffect, useState } from "react";

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form className="campo">
        <label htmlFor="filtrar">Filtrar Gastos</label>
        <select 
            name="filtrar" 
            id="filtrar"
            value={filtro}
            onChange={({target})=> setFiltro(target.value) }
        >
          <option value="">-- Todos Los Categorias --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gastos">Gastos Varios</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
        </select>
      </form>
    </div>
  );
};
export default Filtros;
