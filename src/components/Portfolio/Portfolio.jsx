import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/ptr1.jpg';
import IMG2 from '../../assets/ptr2.png';
import IMG3 from '../../assets/ptr3.png';
import IMG4 from '../../assets/ptr4.jpg';


const Portfolio = () => {
    const data=[
        {
            id:1,
            image:IMG1,
            title:'Ecommerce',
            github:'https://github.com"',
            demo:'https://dribbble.com'
        },
        {
            id:2,
            image:IMG2,
            title:'Bill App',
            github:'https://github.com"',
            demo:'https://dribbble.com'
        },
        {
            id:3,
            image:IMG3,
            title:'Dashboard',
            github:'https://github.com"',
            demo:'https://dribbble.com'
        },
        {
            id:4,
            image:IMG4,
            title:'EwayTax.in',
            github:'https://github.com"',
            demo:'https://dribbble.com'
        }
    ]
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id,image,title,github,demo}) => {
                return(
                    <article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank'>Github</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )})
            }
        </div>
    </section>
  )
}

export default Portfolio