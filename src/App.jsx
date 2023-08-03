import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Find from './components/find/Find';
import Driver from './components/driver/Driver';
import Luxury from './components/Luxury/Luxury';
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Find></Find>
    <Driver></Driver>
    <Luxury></Luxury>
      </div>
  )
}

export default App;