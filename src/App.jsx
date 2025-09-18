import './App.css'
import Card from './Components/Card/Card.jsx';
import Tabela from './Components/Tabelas/Tabela.jsx';
import TabelaLojas from './Components/TabelaLojas/TabelaLojas.jsx';
import { tabelaData } from './data/dados.js';
import { useState, useEffect, useRef } from 'react'; // Adicionei useRef
function App() {

  const [dadosSheets, setDadosSheets] = useState(null); // Estado para armazenar os dados
  const [carregando, setCarregando] = useState(true); // Estado de carregamento
  const [erro, setErro] = useState(null); // Estado de erro
  const url = "https://script.google.com/macros/s/AKfycbx3QUcGoZCMSF4Zx9z2NIofRmGI0uSeWsl1PhCiRHWtAYA2zApa1gYJRiHZf4ki2jE0LQ/exec"  
  const intervaloRef = useRef(null); // Adicionei esta linha

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
    
    // Adicionei estas linhas para polling automático
    intervaloRef.current = setInterval(fetchData, 1800000 ); // Atualiza a cada 30 segundos
    
    // Limpa o intervalo quando o componente for desmontado
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
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
                {/* Adicionei um botão de atualização manual */}
                <button 
                  onClick={fetchData} 
                  style={{marginLeft: '10px', padding: '2px 8px', fontSize: '12px'}}
                  disabled={carregando}
                >
                  {carregando ? '🔄' : '🔄 Atualizar'}
                </button>
            </div>
          <section className='tabela-loja-main'>
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