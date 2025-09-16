import Table from 'react-bootstrap/Table';
import { Form, Tooltip, OverlayTrigger, Spinner, Alert, Button } from 'react-bootstrap';
import './TabelaLojas.css';
import { useState, useEffect } from 'react';

const todasEtapas = [
  // Expansão (14 itens)
  'Envio de documentos ao shopping',
  'Contrato de locação',
  'Contrato social',
  'Contrato de franquia(taxa de franquia)',
  'Dados da PJ (start)',
  'Fotos da loja(interior/fachada/letreiro/mobiliarios)',
  'Pasta Tecnica/Planta Baixa da Loja',
  'Memorial Descritivo',
  'Arquitetura',
  'Definição de Projeto de Arquitetônico/Letreiro/Fachada',
  'Enviar Ficha de Dados Loja Nova',
  'Start/Termino Obras(35-45 dias)',
  'Comunicado Lojas Nova(inter.)',
  'Informações Uniforme',
  
  // Compras (7 itens)
  'TREINAMENTO (Franqueado-Gerente)',
  'Envio do pedidos de inauguração para a franquia',
  'Recebimento de no minimo 90% dos pedidos',
  'Recebimento de sacolas e embalagens',
  'Cadastramento das promoções de inauguração',
  'Envio para o marketing das promoções de inauguração',
  'Avaliação p/ Reposição de Estoque',
  
  // Financeiro (3 itens)
  'Elaboração de fluxo de caixa',
  'Aprovação de budget',
  'Pagamento de fornecedores',
  
  // Sistema (5 itens)
  'Verificação de homologação do PDV Net',
  'Afiliação PDV Net(Contratação do sistema)',
  'Criação E-mail Lopja',
  'Instalação do Sistema PDV Net',
  'Atualização do sistema PDV Net',
  
  // Marketing (5 itens)
  'Tapume',
  'Mkt Mix inaugural',
  'Campanha de inauguração',
  'Entrega de kit de inauguração',
  'Atualização do site com os dados da loja',
  
  // Supervisão (5 itens)
  'Organização e arrumação do PDV e Estoque',
  'Treinamento inicial para equipe de vendas',
  '100% das notas fiscais cadastradas no sistema',
  'Envio de fotos da inauguração(Inter.)',
  'Relatório de inauguração até 4 dias Após a abertura'
];

// Mapeamento de departamentos para as etapas
const mapeamentoDepartamentos = {
  expansao: todasEtapas.slice(0, 14),
  compras: todasEtapas.slice(14, 21),
  financeiro: todasEtapas.slice(21, 24),
  sistema: todasEtapas.slice(24, 29),
  marketing: todasEtapas.slice(29, 34),
  supervisao: todasEtapas.slice(34, 39)
};

const TabelaLojas = ({ dados, carregando, erro, onRecarregar }) => {
  const [lojas, setLojas] = useState([]);
  const [dadosFormatados, setDadosFormatados] = useState(false);

  // Transformar os dados do Sheets para o formato esperado pelo componente
  useEffect(() => {
    if (dados && dados.success && dados.data) {
      formatarDadosSheets(dados.data);
    }
  }, [dados]);

  const formatarDadosSheets = (dadosSheets) => {
    try {
      console.log('Dados recebidos do Sheets:', dadosSheets);
      
      // Primeiro, vamos encontrar todas as lojas únicas
      const todasLojas = {};
      
      // Processar cada departamento
      Object.entries(dadosSheets).forEach(([departamento, infoDepto]) => {
        if (infoDepto.data && infoDepto.data.length > 0) {
          console.log(`Processando departamento: ${departamento}`, infoDepto.data);
          
          infoDepto.data.forEach(lojaSheets => {
            const lojaId = lojaSheets.id_loja || parseInt(lojaSheets.ID) || lojaSheets['Nome da Loja'];
            
            if (!todasLojas[lojaId]) {
              // Criar nova loja
              todasLojas[lojaId] = {
                id: lojaId,
                nome: lojaSheets.nome_loja || lojaSheets['Nome da Loja'] || `Loja ${lojaId}`,
                expansao: new Array(14).fill(false),
                compras: new Array(7).fill(false),
                financeiro: new Array(3).fill(false),
                sistema: new Array(5).fill(false),
                marketing: new Array(5).fill(false),
                supervisao: new Array(5).fill(false)
              };
            }
            
            // Preencher as etapas deste departamento
            const etapasDepartamento = mapeamentoDepartamentos[departamento];
            if (etapasDepartamento) {
              etapasDepartamento.forEach((etapa, index) => {
                if (lojaSheets[etapa] !== undefined) {
                  const valor = typeof lojaSheets[etapa] === 'string' 
                    ? lojaSheets[etapa].toLowerCase() === 'true' || lojaSheets[etapa] === '1'
                    : Boolean(lojaSheets[etapa]);
                  
                  todasLojas[lojaId][departamento][index] = valor;
                }
              });
            }
          });
        }
      });
      
      // Converter objeto para array
      const lojasArray = Object.values(todasLojas);
      console.log('Lojas formatadas:', lojasArray);
      
      setLojas(lojasArray);
      setDadosFormatados(true);
      
    } catch (error) {
      console.error('Erro ao formatar dados do Sheets:', error);
    }
  };

  const handleCheckboxChange = (lojaId, categoria, indexNaCategoria) => {
    setLojas(prevLojas => {
      return prevLojas.map(loja => {
        if (loja.id === lojaId) {
          const novaCategoria = [...loja[categoria]];
          novaCategoria[indexNaCategoria] = !novaCategoria[indexNaCategoria];
          
          return {
            ...loja,
            [categoria]: novaCategoria
          };
        }
        return loja;
      });
    });
  };

  const renderTooltip = (etapa) => (
    <Tooltip id={`tooltip-${etapa}`}>
      {etapa}
    </Tooltip>
  );

  // Debug: mostrar dados recebidos
  useEffect(() => {
    if (dados) {
      console.log('Dados recebidos no TabelaLojas:', dados);
    }
  }, [dados]);

  // Estados de carregamento e erro
  if (carregando) {
    return (
      <div className="text-center p-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p className="mt-2">Carregando dados das lojas...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <Alert variant="danger" className="m-3">
        <Alert.Heading>Erro ao carregar dados</Alert.Heading>
        <p>{erro}</p>
        <Button variant="outline-danger" onClick={onRecarregar}>
          Tentar Novamente
        </Button>
      </Alert>
    );
  }

  if (!dados || !dados.success) {
    return (
      <Alert variant="warning" className="m-3">
        <Alert.Heading>Nenhum dado disponível</Alert.Heading>
        <p>Não foi possível carregar os dados das lojas.</p>
        <Button variant="outline-warning" onClick={onRecarregar}>
          Recarregar Dados
        </Button>
      </Alert>
    );
  }

  if (!dadosFormatados || lojas.length === 0) {
    return (
      <Alert variant="info" className="m-3">
        <Alert.Heading>Processando dados...</Alert.Heading>
        <p>Formatando as informações recebidas.</p>
        <Button variant="outline-info" onClick={onRecarregar}>
          Recarregar
        </Button>
      </Alert>
    );
  }

  return (
    <>
   {/*    <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Status das Lojas ({lojas.length} lojas carregadas)</h4>
        <Button variant="outline-primary" size="sm" onClick={onRecarregar}>
          ↻ Atualizar
        </Button>
      </div> */}

      <div className="table-responsive">
        <Table bordered hover responsive>
          <tbody className="tabela-lojas">
            {lojas.map((loja) => (
              <tr key={loja.id}>
                <td className="primeira-coluna">{loja.nome}</td>

                {todasEtapas.map((etapa, index) => {
                  let categoria;
                  let indiceNaCategoria;
                  
                  if (index < 14) {
                    categoria = 'expansao';
                    indiceNaCategoria = index;
                  } else if (index < 21) {
                    categoria = 'compras';
                    indiceNaCategoria = index - 14;
                  } else if (index < 24) {
                    categoria = 'financeiro';
                    indiceNaCategoria = index - 21;
                  } else if (index < 29) {
                    categoria = 'sistema';
                    indiceNaCategoria = index - 24;
                  } else if (index < 34) {
                    categoria = 'marketing';
                    indiceNaCategoria = index - 29;
                  } else {
                    categoria = 'supervisao';
                    indiceNaCategoria = index - 34;
                  }
                  
                  const isChecked = loja[categoria][indiceNaCategoria];
                  
                  return (
                    <td key={index} className="checkbox-loja">
                      <OverlayTrigger placement="top" overlay={renderTooltip(etapa)}>
                        <div>
                          <Form.Check 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(loja.id, categoria, indiceNaCategoria)}
                          />
                        </div>
                      </OverlayTrigger>
                    </td>
                  );
                })}
                
                <td className='ultima-coluna'>
                  01/01/2026
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TabelaLojas;