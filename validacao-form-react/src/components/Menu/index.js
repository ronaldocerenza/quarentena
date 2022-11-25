import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import UserContext from '../../contexts/UserContext'

const Menu = () => {

  const { user } = useContext(UserContext)

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faGithub} /> <span className='p-2'>Professor Feijó</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cadastro">
            <Nav.Link>Cadastro</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/usuario">
            <Nav.Link>Usuário</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Nav.Link href='#'>{user}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )

}

export default Menu