import './Testimonials.css'

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Rating from '@mui/material/Rating';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faFacebook, faGoogle, } from '@fortawesome/free-brands-svg-icons';




function Example(props)
{
    var items = [
        {
            name: "Great experience",
            description: "I took lessons at the kiteschool and had a lot of fun! What a beautiful sport, definetly not my last time! Perfect English/Spannish speaking instructors.",
            user:"ThomasR6056",
            origin:"-Trip Advisor",
            name2: "Top kite school",
            description2: "Javi is a great teacher who also speaks fluent English. If you consider to go to Santa Marianita you should definitely give Javi a call. I can totally recommend the spot for kitesurfing. It is calm and beautiful..",
            user2:"Fabian S",
            origin2:"-Trip Advisor",
        },
        {
            name: "",
            description: "Javier and the team here are great.   it is a beautiful beach and a great place to learn.  Wish I could have stayed longer.  Thanks Javier!",
            user:"Ian Matthews",
            origin:"-Facebook",
            name2: "",
            description2: "Some of the best guys for learning to kite. Ask for Javier. They have equipment for sale and for rent.",
            user2:"Bruce Macdonald",
            origin2:"-Facebook",
        },
        {
            name: "",
            description: "Ante todo Javier es una excelente persona y tiene un equipo de instructores calificados y buena onda. Tiene variadas opciones en clases y equipos con buenos precios. Muy recomendado 🤙",
            user:"Renato Miraglia",
            origin:"-Google",
            name2: "",
            description2: "Una experiencia increíble, profesores muy capacitados y profesionales, equipos modernos y muy seguros, la playa es perfecta para hacer este deporte. Increíble la comida que sirven en el bar y excelente atención.",
            user2:"Ezequiel Aguilar",
            origin2:"-Google"
        }
    ]

    return (
        <Carousel className="carousel-fondo">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className='contenedor-testimonios' >
            <div className="testimonials-head">
                <p>Testimonials</p>
            <h1>What People Say</h1>
            <h6>We want our clients to feel </h6>
            <h6>awesome and unique</h6>
            </div>
            <div className="contenedor-testimonials">
        <Paper className="contenedor-test-all">
            <h6>{props.item.user}</h6>
            <h2>{props.item.name}</h2>
            <div className="contenedor-comentario">
            <FontAwesomeIcon icon={faQuoteLeft} /><p>{props.item.description}</p><FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <Rating name="read-only" value={5} readOnly />
            <h6>{props.item.origin}</h6>
        </Paper>
        <Paper className="contenedor-test-all">
            <h6>{props.item.user2}</h6>
            <h2>{props.item.name2}</h2>
            <div className="contenedor-comentario">
            <FontAwesomeIcon icon={faQuoteLeft} /><p>{props.item.description2}</p><FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <Rating name="read-only" value={5} readOnly />
            <h6>{props.item.origin2}</h6>
        </Paper>
            </div>
            <h5>Explore reviews</h5>
            <div className="contenedor-review-icon">
                <a href="https://www.facebook.com/kiteecuador/reviews/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="facebook" /></a>
                <a target="_blank"  href="https://www.google.com/maps/place/Kite+Ecuador/@-0.9766156,-80.8395951,17z/data=!4m7!3m6!1s0x0:0xe2b330ddde004696!8m2!3d-0.9766156!4d-80.8395951!9m1!1b1"><FontAwesomeIcon icon={faGoogle} className="google" /></a>
                <a target="_blank" href="https://www.tripadvisor.com/ShowUserReviews-g3205055-d13532391-r840391521-Kite_Ecuador-Santa_Marianita_Manta_Manabi_Province.html#REVIEWS"><img src="https://img.icons8.com/ios/50/000000/tripadvisor.png" className='tripadvisor' alt='tripadvisor' /></a>
            </div>
        </div>
    )
}


export default Example