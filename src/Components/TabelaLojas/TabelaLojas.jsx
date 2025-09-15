import Table from 'react-bootstrap/Table';
import { Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './TabelaLojas.css';

export var lojasData  = [
  {
    "id": 1,
    "nome": "Loja Centro",
    "expansao": [true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    "compras": [true, true, true, true, true, true, true],
    "financeiro": [true, true, true],
    "sistema": [true, true, true, true, true],
    "marketing": [true, true, true, true, true],
    "supervisao": [true, true, true, true, true]
  },
  {
    "id": 2,
    "nome": "Loja Shopping Norte",
    "expansao": [true, false, true, false, true, false, true, false, true, false, true, false, true, false],
    "compras": [false, true, false, true, false, true, false],
    "financeiro": [true, false, true],
    "sistema": [false, true, false, true, false],
    "marketing": [true, false, true, false, true],
    "supervisao": [false, true, false, true, false]
  },
  {
    "id": 3,
    "nome": "Loja Jardins",
    "expansao": [false, true, false, true, false, true, false, true, false, true, false, true, false, true],
    "compras": [true, false, true, false, true, false, true],
    "financeiro": [false, true, false],
    "sistema": [true, false, true, false, true],
    "marketing": [false, true, false, true, false],
    "supervisao": [true, false, true, false, true]
  },
  {
    "id": 4,
    "nome": "Loja Vila Madalena",
    "expansao": [true, true, false, false, true, true, false, false, true, true, false, false, true, true],
    "compras": [false, false, true, true, false, false, true],
    "financeiro": [true, true, false],
    "sistema": [false, false, true, true, false],
    "marketing": [true, true, false, false, true],
    "supervisao": [false, false, true, true, false]
  },
  {
    "id": 5,
    "nome": "Loja Paulista",
    "expansao": [false, false, true, true, false, false, true, true, false, false, true, true, false, false],
    "compras": [true, true, false, false, true, true, false],
    "financeiro": [false, false, true],
    "sistema": [true, true, false, false, true],
    "marketing": [false, false, true, true, false],
    "supervisao": [true, true, false, false, true]
  },
  {
    "id": 6,
    "nome": "Loja Tatuapé",
    "expansao": [true, false, false, true, true, false, false, true, true, false, false, true, true, false],
    "compras": [false, true, true, false, false, true, true],
    "financeiro": [true, false, false],
    "sistema": [false, true, true, false, false],
    "marketing": [true, false, false, true, true],
    "supervisao": [false, true, true, false, false]
  },
  {
    "id": 7,
    "nome": "Loja Moema",
    "expansao": [false, true, true, false, false, true, true, false, false, true, true, false, false, true],
    "compras": [true, false, false, true, true, false, false],
    "financeiro": [false, true, true],
    "sistema": [true, false, false, true, true],
    "marketing": [false, true, true, false, false],
    "supervisao": [true, false, false, true, true]
  },
  {
    "id": 8,
    "nome": "Loja Ibirapuera",
    "expansao": [true, true, true, false, false, false, true, true, true, false, false, false, true, true],
    "compras": [false, false, false, true, true, true, false],
    "financeiro": [true, true, true],
    "sistema": [false, false, false, true, true],
    "marketing": [true, true, true, false, false],
    "supervisao": [false, false, false, true, true]
  },
  {
    "id": 9,
    "nome": "Loja Morumbi",
    "expansao": [false, false, false, true, true, true, false, false, false, true, true, true, false, false],
    "compras": [true, true, true, false, false, false, true],
    "financeiro": [false, false, false],
    "sistema": [true, true, true, false, false],
    "marketing": [false, false, false, true, true],
    "supervisao": [true, true, true, false, false]
  },
  {
    "id": 10,
    "nome": "Loja Alphaville",
    "expansao": [true, false, true, false, true, false, true, false, true, false, true, false, true, false],
    "compras": [false, true, false, true, false, true, false],
    "financeiro": [true, false, true],
    "sistema": [false, true, false, true, false],
    "marketing": [true, false, true, false, true],
    "supervisao": [false, true, false, true, false]
  },
  {
    "id": 11,
    "nome": "Loja Tamboré",
    "expansao": [false, true, false, true, false, true, false, true, false, true, false, true, false, true],
    "compras": [true, false, true, false, true, false, true],
    "financeiro": [false, true, false],
    "sistema": [true, false, true, false, true],
    "marketing": [false, true, false, true, false],
    "supervisao": [true, false, true, false, true]
  },
  {
    "id": 12,
    "nome": "Loja Interlagos",
    "expansao": [true, true, false, false, true, true, false, false, true, true, false, false, true, true],
    "compras": [false, false, true, true, false, false, true],
    "financeiro": [true, true, false],
    "sistema": [false, false, true, true, false],
    "marketing": [true, true, false, false, true],
    "supervisao": [false, false, true, true, false]
  },
  {
    "id": 13,
    "nome": "Loja Santo Amaro",
    "expansao": [false, false, true, true, false, false, true, true, false, false, true, true, false, false],
    "compras": [true, true, false, false, true, true, false],
    "financeiro": [false, false, true],
    "sistema": [true, true, false, false, true],
    "marketing": [false, false, true, true, false],
    "supervisao": [true, true, false, false, true]
  },
  {
    "id": 14,
    "nome": "Loja Jabaquara",
    "expansao": [true, false, false, true, true, false, false, true, true, false, false, true, true, false],
    "compras": [false, true, true, false, false, true, true],
    "financeiro": [true, false, false],
    "sistema": [false, true, true, false, false],
    "marketing": [true, false, false, true, true],
    "supervisao": [false, true, true, false, false]
  },
  {
    "id": 15,
    "nome": "Loja São Caetano",
    "expansao": [false, true, true, false, false, true, true, false, false, true, true, false, false, true],
    "compras": [true, false, false, true, true, false, false],
    "financeiro": [false, true, true],
    "sistema": [true, false, false, true, true],
    "marketing": [false, true, true, false, false],
    "supervisao": [true, false, false, true, true]
  },
  {
    "id": 16,
    "nome": "Loja ABC",
    "expansao": [true, true, true, false, false, false, true, true, true, false, false, false, true, true],
    "compras": [false, false, false, true, true, true, false],
    "financeiro": [true, true, true],
    "sistema": [false, false, false, true, true],
    "marketing": [true, true, true, false, false],
    "supervisao": [false, false, false, true, true]
  },
  {
    "id": 17,
    "nome": "Loja Osasco",
    "expansao": [false, false, false, true, true, true, false, false, false, true, true, true, false, false],
    "compras": [true, true, true, false, false, false, true],
    "financeiro": [false, false, false],
    "sistema": [true, true, true, false, false],
    "marketing": [false, false, false, true, true],
    "supervisao": [true, true, true, false, false]
  },
  {
    "id": 18,
    "nome": "Loja Barra Funda",
    "expansao": [true, false, true, false, true, false, true, false, true, false, true, false, true, false],
    "compras": [false, true, false, true, false, true, false],
    "financeiro": [true, false, true],
    "sistema": [false, true, false, true, false],
    "marketing": [true, false, true, false, true],
    "supervisao": [false, true, false, true, false]
  },
  {
    "id": 19,
    "nome": "Loja Lapa",
    "expansao": [false, true, false, true, false, true, false, true, false, true, false, true, false, true],
    "compras": [true, false, true, false, true, false, true],
    "financeiro": [false, true, false],
    "sistema": [true, false, true, false, true],
    "marketing": [false, true, false, true, false],
    "supervisao": [true, false, true, false, true]
  },
  {
    "id": 20,
    "nome": "Loja Pinheiros",
    "expansao": [true, true, false, false, true, true, false, false, true, true, false, false, true, true],
    "compras": [false, false, true, true, false, false, true],
    "financeiro": [true, true, false],
    "sistema": [false, false, true, true, false],
    "marketing": [true, true, false, false, true],
    "supervisao": [false, false, true, true, false]
  }
]

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

const TabelaLojas = () => {
  // Combinar nomes das lojas com dados de status
  const lojasCompletas = lojasData.map((loja, index) => ({
    ...loja,
    nomeCompleto: loja[index] || loja.nome // Usa o nome do array se disponível
  }));

  // Criar tooltips para cada etapa
  const renderTooltip = (etapa) => (
    <Tooltip id={`tooltip-${etapa}`}>
      {etapa}
    </Tooltip>
  );

  return (
    <>
      <Table bordered hover responsive>
        <tbody className="tabela-lojas">
          {lojasCompletas.map((loja) => (
            <tr key={loja.id}>
              {/* Primeira coluna com o nome da loja */}
              <td className="primeira-coluna">{loja.nomeCompleto}</td>

              {/* Checkboxes para cada etapa */}
              {todasEtapas.map((etapa, index) => {
                // Determinar a qual categoria pertence esta etapa
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
                
                // Obter o valor do checkbox (true/false)
                const isChecked = loja[categoria][indiceNaCategoria];
                
                return (
                  <td key={index} className="checkbox-loja">
                    <OverlayTrigger
                      placement="top"
                      overlay={renderTooltip(etapa)}
                    >
                      <div>
                        <Form.Check 
                          type="checkbox" 
                          checked={isChecked}
                          readOnly
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
    </>
  );
};

export default TabelaLojas;