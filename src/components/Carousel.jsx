import * as React from 'react';
import './Carousel.css'

const Carousels = () =>{
    
    return(
        <div className="contenedor-services">
            <div className='contenedor-card'>
                <div className='contenedor-head-card'>
                    <span></span>
                </div>
                <div className='contenedor-body-card'>
                    <h3>Kitesurfing Lessons & Gear Rental</h3>
                    <button className='btn'>More Info</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <div className='contenedor-head-card-2'>
                    <span></span>
                </div>
                <div className='contenedor-body-card'>
                    <h3>Accomodations</h3>
                    <button className='btn'>More Info</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <div className='contenedor-head-card-3'>
                    <span></span>
                </div>
                <div className='contenedor-body-card'>
                    <h3>SUP & Surf Lessons</h3>
                    <button className='btn'>More Info</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <div className='contenedor-head-card-4'>
                    <span></span>
                </div>
                <div className='contenedor-body-card'>
                    <h3>Foil Board Lessons</h3>
                    <button className='btn'>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Carousels