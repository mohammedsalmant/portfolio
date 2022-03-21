import React from 'react';
import './About.css'
import {FaAward} from 'react-icons/fa';
import ME from '../../assets/fk.jpg';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About</h2>
        <div className='container about__container'>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="AboutImage" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experince</h5>
                <small>1+ Years Working</small>  
              </article>  
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>300+ Clients</small>  
              </article>  
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>80+ Projects </small>  
              </article>  
            </div> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Ducimus quod adipisci vitae doloribus expedita, officia a
              tque suscipit laudantium animi provident nemo ab nisi ad 
              itaque repellat. Quod eveniet similique laborum.
            </p> 
             <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
          </div>
        </div>
      </section>
  )
}

export default About