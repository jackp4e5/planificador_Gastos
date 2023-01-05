import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
const Header = (props) => {
  const {
        presupuesto,
        setPresupuesto,
        isValidBudget,
        setIsValidBudget,
        gastos,
        setGastos 
   } =props;
  return (
    <header>
      <h1 className="capitalize "> Planificador de gastos</h1>

      {isValidBudget ? (
        <ControlPresupuesto
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};
export default Header;
