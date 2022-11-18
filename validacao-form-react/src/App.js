import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Menu from './components/Menu'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
