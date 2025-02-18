import Login from "./components/login/Login.jsx" //caminho para importação da estrutura
import Reembolsos from "./components/reembolsos/Reembolsos.jsx"
import "./global.scss"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Solicitacao from "./components/solicitacao/Solicitacao.jsx"

function App(){ //tudo o q for relacionado ao html é envolvido por ()
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />  
                <Route path="/reembolsos" element={<Reembolsos />} />
                <Route path="/solicitacao" element={<Solicitacao />} />
            </Routes>
        </BrowserRouter>
        </>
    )
    // Route é o caminho, Routes são as rotas, BrowserRouter vincula as rotas no navegador
}
export default App //Usado para exportar o conteúdo para o site, o q vai ser mostrado no site


// <> </> É o sinal fragmento.