//import Home from ""
//import Seta from ""
//import styles from ""
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png"
import Analise from "../../assets/Dashboard/Análises.png"
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png"
import NumeroAnalise from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"

function Reembolsos(){
    return(
        <>
        <div>
            <header>
                <img src="" alt="" />
                <img src="" alt="" />
                <p>Reembolsos</p>
            </header>

            <main className={styles.mainReembolsos}>
                
                <h1>Sistema de Reembolso</h1>
                <p>Solicite novos pedidos de reembolso, visualize e solicite todo o histórico</p>
                <section class={styles.conteinerCards}>
                    <article>
                        <img src="" alt="" />
                        <h3>Solicitar Reembolso</h3>
                    </article>
                    <article>
                        <img src="" alt="" />
                        <h3>Verificar análise</h3>
                    </article>
                    <article>
                        <img src="" alt="" />
                        <h3>Histórico</h3>
                    </article>
                </section>

                <section class={styles.conteinerStatus}>
                    <div>
                        <img className={styles.imgSolitados}src="" alt="" />
                        <h4>182</h4>
                        <p>Solicitados</p>
                    </div>

                    <div>
                        <img className={styles.imgAnalises}src="" alt="" />
                        <h4>74</h4>
                        <p>Em análise</p>
                    </div>

                    <div>
                        <img className={styles.imgAprovados}src="" alt="" />
                        <h4>195</h4>
                        <p>Aprovados</p>
                    </div>

                    <div>
                        <img className={styles.imgRejeitados}src="" alt="" />
                        <h4>41</h4>
                        <p>Rejeitados</p>
                    </div>

                </section>

            </main>
        </div>
        </>
    )
}

export default Reembolsos