import Table from 'react-bootstrap/Table';
import './Tabela.css';


const Tabela = ({titulo, tbody}) => {

  return(
    
    <Table size='md' height="535px" striped bordered hover>
      <thead className="thead-amarela">
        <tr>
          <th>{titulo}</th>         
        </tr>
      </thead>
      <tbody className={tbody}>
        <tr >
          <td>Envio de documentos ao shopping</td>              
        </tr>
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>
        <tr >
          <td>TESTE</td>              
        </tr>
        <tr >
          <td>TESTE</td>              
        </tr> 
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>   
        <tr >
          <td>TESTE</td>              
        </tr>           

      </tbody>
    </Table>
    
  )
}

export default Tabela;
