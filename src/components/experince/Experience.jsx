import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experince</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small> 
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small> 
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small> 
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small> 
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small> 
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend  Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className=''>Experienced</small> 
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className=''>Experienced</small> 
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className=''>Experienced</small> 
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className=''>Experienced</small> 
                </div>
              </article>  
          </div>
        </div>
      </div>
      <article>

      </article>
    </section>
  )
}

export default Experience