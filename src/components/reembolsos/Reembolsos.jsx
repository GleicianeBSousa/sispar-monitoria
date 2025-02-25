import Home from "../../assets/Header/homeHeader.png";
import Seta from "../../assets/Header/Vector.png"
import Styles from "./Reembolsos.module.scss"
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png"
import Analise from "../../assets/Dashboard/Análises.png"
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png"
import NumeroAnalise from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import NavBar from "../navbar/NavBar.jsx"

function Reembolsos(){
    return(
        <div className={Styles.conteiner}>
            <NavBar />
            <section>
            <header>
                <img src={Home} alt="Casa da header" />
                <img src={Seta} alt="Seta da header" />
                <p>Reembolsos</p>
            </header>

            <main className={Styles.mainReembolsos}>
                
                <h1>Sistema de Reembolso</h1>
                <p>Solicite novos pedidos de reembolso, visualize e solicite todo o histórico</p>
                <section class={Styles.conteinerCards}>
                    <article>
                        <img src={Solicitar} alt="Solicitar reembolso" />
                        <h3>Solicitar Reembolso</h3>
                    </article>
                    <article>
                        <img src={Analise} alt="Verificar análise" />
                        <h3>Verificar análise</h3>
                    </article>
                    <article>
                        <img src={Historico} alt="Histórico" />
                        <h3>Histórico</h3>
                    </article>
                </section>

                <section class={Styles.conteinerStatus}>
                    <div>
                        <img className={Styles.imgSolitados}src={NumeroSolicitados} alt="" />
                        <h4>182</h4>
                        <p>Solicitados</p>
                    </div>

                    <div>
                        <img className={Styles.imgAnalises}src={NumeroAnalise} alt="Número de análises" />
                        <h4>74</h4>
                        <p>Em análise</p>
                    </div>

                    <div>
                        <img className={Styles.imgAprovados}src={NumeroAprovados} alt="Número de aprovados" />
                        <h4>195</h4>
                        <p>Aprovados</p>
                    </div>

                    <div>
                        <img className={Styles.imgRejeitados}src={NumeroRejeitados} alt="Números de rejeitados" />
                        <h4>41</h4>
                        <p>Rejeitados</p>
                    </div>

                </section>

            </main>
            </section>
        </div>
    )
}

export default Reembolsos