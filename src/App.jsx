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


function App() {
  return (
    
    <section className='container'>
          <div>
            <Card/>
          </div>
          <div> 
            <Tabela titulo={"Expansão"} tbody={"tbody-branco"}/>
          </div>   
          <div> 
            <Tabela titulo={"Compras"} />
          </div>
          <div> 
            <Tabela titulo={"Financeiro"} tbody={"tbody-branco"} />
          </div>
          <div> 
            <Tabela titulo={"Expansão"}/>
          </div>   
          <div> 
            <Tabela titulo={"Compras"}  tbody={"tbody-branco"} />
          </div>
          <div> 
            <Tabela titulo={"Financeiro"} />
          </div>      
      </section>
    
  )
}
         
       
         

export default App