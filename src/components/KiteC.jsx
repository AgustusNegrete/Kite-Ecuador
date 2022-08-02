import './KiteC.css'
import Prices2 from './Prices2'
const KiteC = () =>{
return(
    <div className="contenedor-kiteC">
        <div>
            <img src="https://todokitesurf.site/wp-content/uploads/2021/09/Duotone_Kiteboarding_Neo_2021-1024x353.jpeg" alt="clase kite"  className='img-kiteC'/>
        </div>
        <div className='contenedor-kiteC-2'>
            <div className="descripcion-kiteC">
                    <Prices2/>
            </div>
        </div>
    </div>
)
}
export default KiteC