import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const validaForm = () => {
    if (nome === '') {
      setMsg('Preencha o nome!')
      return false
    }
    if (email === '') {
      setMsg('Preencha o email!')
      return false
    }
    setMsg('')

    // AQUI iriamos chamar a API para receber os dados do formulário
    return true
  }


  return (
    <div className='mt-3 mb-3'>
      <h1 className='mb-4'>Cadastro</h1>
      <div className='row'>
        <div className='col'>
          <Form.Control
            placeholder='Nome...'
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
            }}
          />
        </div>
        <div className='col'>
          <Form.Control
            placeholder='Email...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='col'>
          <Button
            variant="primary"
            onClick={validaForm}  
          >
            SALVAR
          </Button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          {msg !== '' &&
            <Alert variant='warning'>
              {msg}
            </Alert>
          }
        </div>
      </div>
      
    </div>
  )

}

export default Cadastro