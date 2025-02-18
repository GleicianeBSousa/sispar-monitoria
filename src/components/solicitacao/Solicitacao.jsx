import NavBar from "../navbar/NavBar.jsx";
import Styles from "./Solicitacao.module.scss"

function Solicitacao() {
  return (
    <div className={Styles.conteiner}>
      <NavBar />
      <main>
        <h1>Solicitação</h1>
      </main>
    </div>
  );
}

export default Solicitacao;
