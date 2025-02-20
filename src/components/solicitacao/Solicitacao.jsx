import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Header/homeHeader.png";
import Seta from "../../assets/Header/Vector.png"



function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />
      <div className={styles.conteinerPrincipalSolicitacao}>

        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="vetor da seta" />
          <p>Reembolso</p>
          <img src={Seta} alt="vetor da seta" />
          <p>Solicitação de reembolso</p>
        </header>

        <main className={styles.mainSolicitacao}>

          <form className={styles.formSolicitacao}>

            <div className={styles.grupo1}>
              <div classname={inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do reembolso</label>
                
              </div>
            </div >

            <div className={styles.barraDeNotificacao}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div classname={styles.despesas}>
                <label htmlFor="">Tipo de Despesa</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">Alimentação</option>
                  <option value="">Combustível</option>
                </select>
              </div>

              <div classname={styles.custo}>
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
