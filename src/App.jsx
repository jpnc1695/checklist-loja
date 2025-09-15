/* import './App.css'
import Card from './Components/Card/Card.jsx';
import Tabela from './Components/Tabelas/Tabela.jsx';
function App() {

  return (
    <div className='main-container'>
        <Card />
        <Tabela/>
    </div>
  )
}

export default App
 */

import './App.css'
import Card from './Components/Card/Card.jsx';
import Tabela from './Components/Tabelas/Tabela.jsx';
import TabelaLojas from './Components/TabelaLojas/TabelaLojas.jsx';
import { tabelaData } from './data/dados.js';


function App() {
  return (
    
    <>
          <section className='container'>
            <div>
              <Card />
            </div>
            <div>
              <Tabela titulo={"Expansão"} dados={tabelaData.expansao} />
            </div>
            <div>
              <Tabela titulo={"Compras"} dados={tabelaData.compras} tbody={"tbody-branco"} />
            </div>
            <div>
              <Tabela titulo={"Financeiro"} dados={tabelaData.financeiro} />
            </div>
            <div>
              <Tabela titulo={"Sistema"} tbody={"tbody-branco"} dados={tabelaData.sistema} />
            </div>
            <div>
              <Tabela titulo={"Marketing"} dados={tabelaData.marketing} />
            </div>
            <div>
              <Tabela titulo={"Supervisão"} tbody={"tbody-branco"} dados={tabelaData.supervisao} />
            </div>
            <div className='previsao-inauguracao'>
              <span>Previsão de Inauguração </span>
            </div>
          </section>
            <div className='proximas-inaugurações'>
                <span>Próximas inaugurações</span>
            </div>
          <section>
          <TabelaLojas>
            
          </TabelaLojas>
          </section>
    </>
              
  )
}
         
       
         

export default App