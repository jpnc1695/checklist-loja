import Table from 'react-bootstrap/Table';
import './Tabela.css';


const Tabela = ({titulo, tbody, dados = []}) => {

  return(
    
    <Table size='md' height="535px" width="260px" striped bordered hover>
      <thead className="thead-amarela">
        <tr>
          <th>{titulo}</th>         
        </tr>
      </thead>
      <tbody className={tbody}>
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
