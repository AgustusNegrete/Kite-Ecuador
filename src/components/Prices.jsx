import './Prices.css'
import Divider from '@mui/material/Divider';


const Prices = () =>{
    return(
        <div className='contenedor-prices'>
            <div className='contenedor-header-prices'>
                <h6>Pricing</h6>
                <h1>Kite School Courses</h1>
            </div>
            <div className='contenedor-cards'>
                <div className='contenedor-card-1'>
                    <div className='contenedor-card-head'>
                    <p className='precios'>153$</p>
                    <p className='descripcion-Course'>4 Hour Course</p>
                    </div>
                    <div className='contenedor-card-body'>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                    </div>
                </div>
                <div className='contenedor-card-2'>
                <div className='contenedor-card-head'>
                <p className='precios'>299$</p>
                    <p className='descripcion-Course'>10 Hour Course</p>
                    </div>
                    <div className='contenedor-card-body-2'>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                    </div>
                </div>
                <div className='contenedor-card-1'>
                <div className='contenedor-card-head'>
                    <p className='precios'>399$</p>
                    <p className='descripcion-Course'>14 Hour Course</p>
                    </div>
                    <div className='contenedor-card-body'>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                        <hr/>
                        <p>aqui van detalles</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices