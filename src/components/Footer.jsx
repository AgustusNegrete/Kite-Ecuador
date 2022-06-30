import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faPhone, faClock, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
    return(
        <div className='contenedor-footer'>
            <div className='contenedor-logo'>
                <img  src="https://kiteecuador.com/wp-content/uploads/2018/12/KiteFinalwhale.png" className='img-whale' alt="logo kite" />
                <img src="https://kiteecuador.com/wp-content/uploads/2019/05/iko-affiliated-center_white-logo.png" className='img-iko' alt="logo iko" />
            </div>
            <div className='contenedor-detalles'>
                <div className='contacto'>
                    <p><FontAwesomeIcon icon={faWhatsapp} /> +593 98 973 1480  </p>
                    <p><FontAwesomeIcon icon={faPhone} /> +593 98 973 1480</p>
                </div>
                <div className='detalles'>
                <p><FontAwesomeIcon icon={faClock} /> 10:00am - 18:00pm  </p>
                <p><FontAwesomeIcon icon={faLocationDot} /> Santa Marianita | Manabi | Ecuador </p>
                <p><FontAwesomeIcon icon={faEnvelope} /> kite.ecuador@gmail.com  </p>
                </div>
            </div>
            <div className='contenedor-opt'>
                <div className='head-oursocials'>
                    <div className='head-social'>
                        <p >Our Socials</p>
                    </div>
                    <div className='body-social'>
                        <a href="https://www.facebook.com/kiteecuador/"><FontAwesomeIcon icon={faFacebook} className="icon-facebook"></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/kiteecuador/"><FontAwesomeIcon icon={faInstagram} className="icon-instagram"></FontAwesomeIcon></a>
                        <a href="https://www.youtube.com/channel/UC3bSyyfIldBF2lUXpadDJHw"><FontAwesomeIcon icon={faYoutube} className="icon-youtube"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className='body-oursocials'>
                    <div className='head-uselinks'>
                        <p>Useful Link</p>
                    </div>
                    <div className='body-uselinks'>
                        <a href="#">aqui va un link</a>
                        <a href="#">aqui va un link</a>
                        <a href="#">aqui va un link</a>
                        <a href="#">aqui va un link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer