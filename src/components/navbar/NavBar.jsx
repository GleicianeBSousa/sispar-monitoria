import styles from "./NavBar.module.scss";
import Home from "../../assets/Header NavBar/botão - Home.png";
import Historico from "../../assets/Header NavBar/Botão - Histórico.png";
import Pesquisa from "../../assets/Header NavBar/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header NavBar/Botão - Reembolso.png";
import Perfil from "../../assets/Header NavBar/image.png";
import Sair from "../../assets/Header NavBar/Botão - Sair.png";
import Fechar from "../../assets/Header NavBar/imagem-fechar-header.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navBarEstilo}>
      <div>
        <button>
          <img src={Fechar} alt="Imagem abrir e fechar" />
        </button>

        <section>
          <img src={Perfil} alt="Imagem do perfil" />
        </section>

        <Link to="login">
        <button>
          <img src={Home} alt="Imagem Home" />
        </button>
        </Link>

        <Link to="/reembolso">
        <button>
          <img src={Reembolso} alt="Imagem Reembolso" />
        </button>
        </Link>

        <button>
          <img src={Pesquisa} alt="Imagem Pesquisa" />
        </button>

        <button>
          <img src={Historico} alt="Imagem histórico" />
        </button>
        
        <button>
          <img src={Sair} alt="Imagem sair" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
