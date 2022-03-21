import React from 'react';
import './CTA';
import CTA from './CTA';
import fkr from '../../assets/fkr.png'
import HeaderSocials from './HeadeSocials';
import './Header.css'

const Header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Mohammed Salman </h1>
       <h5 className="text-light">Fullstack Developer</h5>
       <CTA/>

       <HeaderSocials/>

       <div className="me">
         <img src={fkr} alt="me" />
       </div>

       <a href="#contact" className='scroll_down'>Scroll Down</a>

     </div>
   </header>
  )
}

export default Header