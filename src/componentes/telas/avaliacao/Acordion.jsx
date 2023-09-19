import { useContext } from "react";
import Autenticacao from "../../seguranca/Autenticacao";
import AvaliacaoContext from "./AvaliacaoContext";

function AcordionPrivado(props) {
  const { novoObjeto, listaAvaliacoes, editarObjeto, remover } =
    useContext(AvaliacaoContext);

  let mediaAvaliacao = 0;
  if (listaAvaliacoes.length > 0) {
    listaAvaliacoes.map((objeto) => (mediaAvaliacao += objeto.nota));
    mediaAvaliacao = mediaAvaliacao / listaAvaliacoes.length;
  }

  const autenticacao = Autenticacao.pegaAutenticacao();

  return (
    <div
      className="accordion"
      id="accordionExample"
      style={{ paddingLeft: "5%", paddingRight: "5%" }}
    >
      <div className="accordion-item" style={{ backgroundColor: "#cce6ff" }}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Avaliçoes
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#modalEdicao"
              onClick={() => novoObjeto()}
              style={{ textAlign: "center" }}
            >
              Nova Avaliação <i className="bi bi-file-earmark-plus"></i>
            </button>
            <div style={{ backgroundColor: "#cce6ff" }}>
              <div
                className="row"
                style={{
                  padding: "30px",
                  textAlign: "center",
                  justifyItems: "center",
                }}
              >
                <h4 className="col text-bg-info p-3">
                  Total:{listaAvaliacoes.length}
                </h4>
                <h4 className="col"> </h4>
                <h4 className="col text-bg-info p-3">
                  Media: {mediaAvaliacao.toFixed(1)}
                </h4>
              </div>
              {listaAvaliacoes.map((objeto) => (
                <div style={{ padding: "10px", textAlign: "left" }}>
                  <div className="card text-left" key={objeto.codigo}>
                    <div className="card-header">
                      {objeto.autor}
                      {autenticacao && (
                        <div
                          className="position-absolute top-0 end-0"
                          style={{ padding: "1px", margin: "1px" }}
                        >
                          <button
                            className="btn btn-info"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEdicao"
                            onClick={() => editarObjeto(objeto.codigo)}
                            style={{ padding: "5px", margin: "1px" }}
                          >
                            <i className="bi bi-pencil-square" />
                          </button>
                          <button
                            className="btn btn-danger"
                            title="Remover"
                            onClick={() => {
                              remover(objeto.codigo);
                            }}
                            style={{ padding: "5px", margin: "1px" }}
                          >
                            <i className="bi bi-trash" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Nota: {objeto.nota}</h5>
                      <p className="card-text">{objeto.texto}</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                      {objeto.data}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcordionPrivado;
