import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Service />
      <Expertise />
      <Footer />
    </>
  )
}

export default App
