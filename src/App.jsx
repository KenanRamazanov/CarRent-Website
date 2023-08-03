import React from 'react'
import logo from '../public/vite.svg'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Find from './components/find/Find';
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Find></Find>
      </div>
  )
}

export default App;