import { useContext } from "react";
import HomeContext from "./HomeContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { NavLink } from "react-router-dom";

function Card() {
  const { listaObjetos } = useContext(HomeContext);

  return (
    <div>
      <div className="row w-100 p-3">
        {listaObjetos.length > 0 &&
          listaObjetos.map((objeto) => (
            <NavLink
              className="col-sm-3 btn btn-outline-secondary"
              role="button "
              exact
              to={`produto/${objeto.codigo}`}
              style={{ border: "1px" }}
              key={objeto.codigo}
            >
              <div className="card mb-3 w-auto p-3">
                <div className="card-header">{objeto.nome}</div>
                <div className="card-body">
                  <h5 className="card-title">{objeto.nome}</h5>
                  <p className="card-text">{objeto.descricao}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Preço: {formatoMoeda(objeto.valor)}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Categoria: {objeto.categoria_nome}
                    </small>
                  </p>
                </div>
                <div className="card-footer text-muted">
                  Estoque: {objeto.quantidade_estoque}
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Card;
