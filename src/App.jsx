
import './App.css'
import Card from './Components/Card/Card.jsx';
import Tabela from './Components/Tabelas/Tabela.jsx';
import TabelaLojas from './Components/TabelaLojas/TabelaLojas.jsx';
import { tabelaData } from './data/dados.js';
import { useState, useEffect } from 'react'; 
function App() {

  const [dadosSheets, setDadosSheets] = useState(null); // Estado para armazenar os dados
  const [carregando, setCarregando] = useState(true); // Estado de carregamento
  const [erro, setErro] = useState(null); // Estado de erro
  const url = "https://script.google.com/macros/s/AKfycbwdlyjlpHvWls8dk-9cfwwpy6GUldAnpfSDI20qttNEU3rDJs23A9iTkF3kRkVQzetLgw/exec"  

  async function fetchData() {
    try {
      setCarregando(true);
      setErro(null);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Dados recebidos:', data);
      
      setDadosSheets(data); // Armazena os dados no estado
      return data;
      
    } catch (error) {
      console.error('Erro:', error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    fetchData(); // Executa a busca automaticamente
  }, []);

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
          <TabelaLojas   
              dados={dadosSheets} 
              carregando={carregando} 
              erro={erro}
              onRecarregar={fetchData}>
            
          </TabelaLojas>
          </section>
    </>
              
  )
}
         
export default App