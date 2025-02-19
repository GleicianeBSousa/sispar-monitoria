import NavBar from "../navbar/NavBar.jsx";
import Styles from "./Solicitacao.module.scss";
import Home from "../../assets/Header NavBar/botão - Home.png";
//import Home from ""
//import Seta from ""

function Solicitacao() {
  return (
    <div className={Styles.layoutSolicitacao}>
      <NavBar />
      <div className={Styles.conteinerPrincipalSolicitacao}>

        <header className={Styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="vetor da seta" />
          <p>Reembolso</p>
          <img src={Seta} alt="vetor da seta" />
          <p>Solicitação de reembolso</p>
        </header>

        <main className={Styles.mainSolicitacao}>

          <form className={Styles.formSolicitacao}>

            <div className={Styles.grupo1}>
              <div classname={inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={Styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={Styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" />
              </div>

              <div className={Styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do reembolso</label>
                
              </div>
            </div >

            <div className={Styles.barraDeNotificacao}></div>

            <div className={Styles.grupo2}>
              <div className={Styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div classname={Styles.despesas}>
                <label htmlFor="">Tipo de Despesa</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">Alimentação</option>
                  <option value="">Combustível</option>
                </select>
              </div>

              <div classname={Styles.custo}>
                <label htmlFor="">Centro de Custo</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">Alimentação</option>
                  <option value="">Combustível</option>
                </select>
              </div>

            </div>
            
          </form>
        </main>
      </div>
    </div>
  );
}

export default Solicitacao;
