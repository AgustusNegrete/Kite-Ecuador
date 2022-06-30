import './Gallery.css'

const Gallery = () =>{
    return(
    <div className='contenedor-gall'>
        <div className='contenedor-gallery'>
            <div className='contenedor-gallery-fila-1'>
                <div className='contenedor-gallery-col'>
                    <h6>Gallery</h6>
                    <h1>Our Photos & Videos</h1>
                </div>
                <div className='contenedor-gallery-col-5'>
                    <img src='https://www.intermundial.es/blog/wp-content/uploads/2019/12/clases-kitesurf.jpg' alt='kite'/>
                </div>
            </div>
            <div className='contenedor-gallery-fila-2'>
                <div className='contenedor-gallery-col-1'>
                <img src='https://www.intermundial.es/blog/wp-content/uploads/2019/12/clases-kitesurf.jpg' alt='kite'/>
                </div>
                <div className='contenedor-gallery-col-4'>
                    <div className='contenedor-gallery-col-3'>
                    <img src='https://mediap.flypgs.com/awh/1175/893//files/Ekstrem_Sporlar/kitesurfing-malzemeleri.jpg' alt='kite2'/>
                    </div>
                    <div className='contenedor-gallery-col-3'>
                    <img src='https://mediap.flypgs.com/awh/1175/893//files/Ekstrem_Sporlar/kitesurfing-malzemeleri.jpg' alt='kite2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gallery