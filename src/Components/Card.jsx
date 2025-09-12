import './Card.css'
import Form from 'react-bootstrap/Form';


const Card = () => {
  return(

    <section className="card">
      <div>
        <h1>CHECK LIST </h1>
        <p>Implantação Loja</p>
        <p>2014 Interno</p>
      </div> 
      <div>
        <Form>
        <Form.Check // prettier-ignore
            type={'radio'}
            id={`default`}
            label={`Processo Pendente`}
          />
           <Form.Check // prettier-ignore
            type={'radio'}
            id={`default`}
            label={`Processo Cumprido`}
          />
           <Form.Check // prettier-ignore
            type={'radio'}
            id={`default`}
            label={`Não Aplica`}
          />
        </Form>
        </div>  
     
    </section>

    
  )
}

export default Card