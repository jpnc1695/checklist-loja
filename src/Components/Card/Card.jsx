import './Card.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const Card = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    // Se clicar no mesmo radio que já está selecionado, desmarca
    if (selectedOption === value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  return(
    <>
    <section className="card">
      <div>
        <h1>CHECK LIST </h1>
        <p>Implantação Loja</p>
        <p>2025 Interno</p>
      </div> 
      <div className='form-radio'>
      <Form>
          <div className="radio-group">
            <Form.Check
              type={'radio'}
              id={'pendente'}
              label={'Processo Pendente'}
              checked={selectedOption === 'pendente'}
              onChange={() => handleRadioChange('pendente')}
              key={1}
            />
            <Form.Check
              type={'radio'}
              id={'cumprido'}
              label={'Processo Cumprido'}
              checked={selectedOption === 'cumprido'}
              onChange={() => handleRadioChange('cumprido')}
              key={2}
            />
            <Form.Check
              type={'radio'}
              id={'nao-aplica'}
              label={'Não Aplica'}
              checked={selectedOption === 'nao-aplica'}
              onChange={() => handleRadioChange('nao-aplica')}
              key={3}
            />
          </div>
        </Form>
      </div> 
    </section>

    <section className='footer-card'>
      <div >
          <h1 >Lojas Inauguradas ____</h1>
          <p><b>Presente em __ Estados e __ Cidades e __Internacionalização</b></p>                                                 
        </div>
    </section>

  </>
  )
}

export default Card