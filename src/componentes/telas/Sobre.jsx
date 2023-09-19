import { NavLink } from "react-router-dom";

function Sobre() {
    return (
        <div style={{ padding: '20px' }}>
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 >Sobre...</h1>
                    <p className="fs-3">Data da versão: 18/09/2023</p>

                    <p className="lead">
                        Sistema desenvolvido para estudo no projeto de pesquisa intitulado: Estudo Comparativo entre Bibliotecas de Componentes de Interface de Usuário para ReactJS.
                    </p>
                    <p className="lead">
                        Início da Execução: 01/09/2023 Término da Execução: 31/08/2024
                    </p>
                    <p className="lead">
                        Número de registro do projeto na PROPESP: PE08230723/059
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;