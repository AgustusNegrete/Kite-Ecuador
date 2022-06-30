import Carousel from './Carousel'
import './Lessons.css'


const Lessons = () =>{
    return(
        <div className='contenedor'>
            <div className='contenedor-p'>
                <h6>Services</h6>
                <h1>Explore</h1>
                <h1>Our</h1>
                <h1>Services</h1>
            </div>
            <div className='contenedor-slides'>
            <Carousel/>
            </div>
            
        </div>
    )
}

export default Lessons