import styles from "./Login.module.scss"
import Logo from "../../assets/Tela Login/logo.png"

function Login (){
    return(
        <main>
        <section className={styles.conteinerNavio}>
            <p>Reservado para o navio</p>
        </section>

        <section className={styles.conteinerFormulario}>
            <img src={Logo} alt="Logo da Wilson Sons" />
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamentos</p>

            <form action="">
            <input type="email" name="email"  />
            <input type="text" />

            <a href="">Esqueceu a senha</a>

            <div>
                <button className={styles.buttonEntrar}>Entrar</button>
                <button className={styles.buttonCriar}>Criar conta</button>
            </div>
            </form>

        </section>




        </main>
    )
}
export default Login;