import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experince from './components/experince/Experience';
import Services from './components/services/Services';
import Testmonials from './components/testmonials/Testmonials';
import Contact from './components/contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About />
      <Experince />
      <Services />
      <Portfolio/>
      <Testmonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App