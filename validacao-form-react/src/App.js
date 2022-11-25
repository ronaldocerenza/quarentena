import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Menu from './components/Menu'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Usuario from './pages/Usuario'

import UserContext from './contexts/UserContext'

function App() {

  const [user, setUser] = useState('Professor Feijó')


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
            </Route>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/usuario' element={<Usuario />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
