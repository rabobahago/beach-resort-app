import React from 'react'
import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Room from './pages/Room'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Home />
      <Room />
      <SingleRoom />
      <Error />
    </>
  )
}

export default App
