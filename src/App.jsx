import Login from "./components/login/Login.jsx" //caminho para importação da estrutura
import Reembolsos from "./components/reembolsos/Reembolsos.jsx"
import "./global.scss"


function App(){ //tudo o q for relacionado ao html é envolvido por ()
    return(
        <>
        <Login />
        </>
    )
}
export default App //Usado para exportar o conteúdo para o site, o q vai ser mostrado no site


// <> </> É o sinal fragmento.