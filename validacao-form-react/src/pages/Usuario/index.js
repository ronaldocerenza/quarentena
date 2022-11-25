import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import UserContext from '../../contexts/UserContext'

const Usuario = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <div className='mt-3 mb-3'>
      <h1 className='mb-4'>Dados do Usuário</h1>
      <div className='row'>
        <div className='col'>
          <Form.Control
            placeholder='Nome...'
            value={user}
            onChange={(e) => {
              setUser(e.target.value)
            }}
          />
        </div>
        <div className='col'>
        </div>
        <div className='col'>

        </div>
      </div>
    </div>
  )

}

export default Usuario