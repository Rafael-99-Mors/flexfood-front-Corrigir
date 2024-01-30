import React from 'react'
import HomeCliente from './HomeCliente'
import HomeRestaurante from './HomeRestaurante'
import MenuLateral from '../components/MenuLateral'
import { Container } from '@mui/material'

const Home = () => {
 
 
 
  return (
    <>
        <MenuLateral titulo="Página Inicial"/>
        <Container sx={{ mt:10 }}>
          { localStorage.getItem("tipo") == "C" && <HomeCliente/>}
          { localStorage.getItem("tipo") == "R" && <HomeRestaurante/>}
        </Container>
    </>
  )
}

export default Home
