import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import Dialogo from "../../comuns/Dialogo";
import AvaliacaoContext from "./AvaliacaoContext";

function Form() {
  const { objeto, handleChange, acaoCadastrarAvaliacao, alerta } =
    useContext(AvaliacaoContext);

  return (
    <Dialogo
      id="modalEdicao"
      titulo="Avaliacao"
      idform="formulario"
      acaoCadastrar={acaoCadastrarAvaliacao}
    >
      <Alerta alerta={alerta} />
      <CampoEntrada
        value={objeto.codigo}
        id="txtCodigo"
        name="codigo"
        label="Código"
        tipo="number"
        onchange={handleChange}
        msgvalido=""
        msginvalido=""
        requerido={false}
        readonly={true}
        maxCaracteres={5}
      />
      <CampoEntrada
        value={objeto.autor}
        id="txtAutor"
        name="autor"
        label="Autor"
        tipo="text"
        onchange={handleChange}
        msgvalido=""
        msginvalido=""
        requerido={true}
        readonly={false}
        maxCaracteres={40}
      />
      <CampoEntrada
        value={objeto.email}
        id="txtEmail"
        name="email"
        label="Email"
        tipo="text"
        onchange={handleChange}
        msgvalido="OK certo"
        msginvalido="Informe o autor"
        requerido={true}
        readonly={false}
        maxCaracteres={40}
      />
      <CampoEntrada
        value={objeto.texto}
        id="txtTexto"
        name="texto"
        label="Texto"
        tipo="text"
        onchange={handleChange}
        msgvalido="Texto valido"
        msginvalido="Insira um texto"
        requerido={true}
        readonly={false}
        maxCaracteres={40}
      />
      <CampoSelect
        value={objeto.nota}
        id="txtNota"
        name="nota"
        label="Nota"
        onchange={handleChange}
        msgvalido="OK "
        msginvalido="Insira uma nota"
        requerido={true}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </CampoSelect>
      <CampoEntrada
        value={objeto.data}
        id="txtDataCadastro"
        name="data_cadastro"
        label="Data de Cadastro"
        tipo="date"
        onchange={handleChange}
        msgvalido="OK certo"
        msginvalido="Informe a data de cadastro"
        requerido={true}
        readonly={false}
        maxCaracteres={12}
      />
    </Dialogo>
  );
}

export default Form;
