import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';
import './TabelaLojas.css';

const lojas = [
  "JP04 - Mangabeira Shopping",
  "ITQ1 - Outlet Premium SP",
  "BIR1 - Parque Shopping Barueri",
  "VDC1 - Boulevard Shopping",
  "Juazeiro do Norte",
  "SP01 - Shopping Center Ibirapuera",
  "RJ02 - Botafogo Praia Shopping",
  "BH03 - Diamond Mall",
  "FOR1 - Shopping Iguatemi Fortaleza",
  "REC1 - Shopping Recife",
  "POA1 - Shopping Moinhos de Vento",
  "SAL1 - Salvador Shopping",
  "MAN1 - Manauara Shopping",
  "BSB1 - Shopping Iguatemi Brasília",
  "FLN1 - Floripa Shopping",
  "CWB1 - Shopping Estação Curitiba",
  "VIX1 - Shopping Vitória",
  
];

const TabelaLojas = () => {
  return (
    <>
      <Table bordered hover responsive  >
        <tbody className="tabela-lojas" >
          {lojas.map((loja, index) => (
            <tr key={index}>
              {/* Primeira coluna com o nome da loja */}
              <td className="primeira-coluna">{loja}</td>

              {/* 27 checkboxes */}
              {Array.from({ length: 38 }, (_, i) => (
                <td key={i} className="checkbox-loja" >
                  <Form.Check type="checkbox" />
                </td>
              ))}
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