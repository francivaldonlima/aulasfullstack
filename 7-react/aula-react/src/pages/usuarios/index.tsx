import { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Tabela from "../../components/Tabela";
import Form from "../../components/Form";

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);

  return (
    <div className="container">
      <Cabecalho titulo="Cadastro de usuários" />
      <Tabela usuarios={usuarios} />
      <Form usuarios={usuarios} setUsuarios={setUsuarios} />
    </div>
  );
}

export default Usuarios;
