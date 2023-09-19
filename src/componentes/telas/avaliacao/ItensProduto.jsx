import { useContext } from "react";
import { formatoMoeda } from "../../comuns/Uteis";
import AvaliacaoContext from "./AvaliacaoContext";

function ItensProduto() {
  const { produto } = useContext(AvaliacaoContext);

  return (
    <div style={{ padding: "40px", margin: "10px" }}>
      <div className="container text-center">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>{produto.nome}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                style={{
                  textAlign: "initial",
                  padding: "40px",
                  margin: "10px",
                }}
              >
                {" "}
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      {" "}
                      <h4>Em estoque:{produto.quantidade_estoque}</h4>
                    </div>
                    <div className="col">
                      {" "}
                      <h4>{produto.ativo ? "Disponivel" : "Indisponivel"}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {" "}
                      <h3>Valor: {formatoMoeda(produto.valor)}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {" "}
                      <h6>Lançamento: {produto.data_cadastro}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Descrição
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{produto.descricao}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItensProduto;
