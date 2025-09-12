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
import { tabelaData } from './data/dados.js';


function App() {
  return (
    
    <section className='container'>
          <div>
            <Card/>
          </div>
          <div> 
            <Tabela titulo={"Expansão"} dados={tabelaData.expansao} tbody={"tbody-branco"} />
          </div>   
          <div> 
            <Tabela titulo={"Compras"} dados={tabelaData.compras} />
          </div>
          <div> 
            <Tabela titulo={"Financeiro"} />
          </div>
          <div> 
            <Tabela titulo={"Sistema"} tbody={"tbody-branco"}/>
          </div>   
          <div> 
            <Tabela titulo={"Marketing"} />
          </div>
          <div> 
            <Tabela titulo={"Supervisão"} tbody={"tbody-branco"} />
          </div>      
      </section>
    
  )
}
         
       
         

export default App