import "./style.css";
import HeaderConsumidor from "../../componentes/HeaderConsumidor";
import Restaurantes from "../../componentes/Restaurantes";
import { UseFetch } from "../../contexto/regraDeNegocio";

const Inicial = () => {
  return (
    <>
      <HeaderConsumidor />
      <div className="container__restaurantes">
        <Restaurantes />
      </div>
    </>
  );
};

export default Inicial;
