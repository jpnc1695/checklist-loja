import Table from 'react-bootstrap/Table';
import './Tabela.css';


const Tabela = ({titulo, tbody, dados = []}) => {

  return(
    
    <Table className="tabela-horizontal"  striped bordered hover>
      <thead className="thead-amarela">
        <tr>
          <th>{titulo}</th>         
        </tr>
      </thead>
      <tbody className={tbody} >
      {dados.map((item) => (
          <tr key={item}>
            <td>{item}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>
    
  )
}

export default Tabela;
