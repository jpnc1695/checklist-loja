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
      <div className='form-radio'>
        <Form>
          <div className="radio-group">
            <Form.Check
              type={'radio'}
              id={'pendente'}
              label={'Processo Pendente'}
            />
            <Form.Check
              type={'radio'}
              id={'cumprido'}
              label={'Processo Cumprido'}
            />
            <Form.Check
              type={'radio'}
              id={'nao-aplica'}
              label={'Não Aplica'}
            />
          </div>
        </Form>
      </div>  
    </section>
  )
}

export default Card