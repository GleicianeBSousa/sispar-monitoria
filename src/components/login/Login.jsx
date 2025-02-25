import styles from "./Login.module.scss";
import Logo from "../../assets/Tela Login/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <section className={styles.conteinerImagem}></section>

      <section className={styles.conteinerFormulario}>
        <img src={Logo} alt="Logo da Wilson Sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamentos</p>

        <form class={styles.formLogin}>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="senha" />

          <a href="">Esqueci  minha senha</a>

          <div>
            <Link to="/reembolsos" >
            <button className={styles.buttonEntrar}>Entrar</button>
            </Link>
            <Link to="/reembolsos"> 
            <button className={styles.buttonCriar}>Criar conta</button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Login;
