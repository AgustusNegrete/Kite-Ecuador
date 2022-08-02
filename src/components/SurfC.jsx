import './SurfC.css'
const KiteC = () =>{
return(
    <div className="contenedor-surfC">
        <div>
            <img src="https://standupsurfshop.com.au/wp-content/uploads/2021/10/stand-up-surf-shop-SUP-surf-SUP-advanced-wave-turn-1300x430-1.jpg" alt="clase surf"  className='img-surfC'/>
        </div>
        <div className='contenedor-surfC-2'>
            <div className="descripcion-surfC">
                <h2>SUP Lessons</h2>
                <p>KITE ECUADOR has teamed up with FANATIC Paddle Boards (best SUP boards on the market worldwide)! We are offering Stand Up Paddle Boards classes for beginners and intermediate. </p>
                <p>After the beginner 1 or 2-hour technical class on the sand and longer water lesson, you can practice your skills in the small surf section!</p>
                <h4>Amaze yourself</h4>
                <p>Go on a private paddling adventure, sunrises and sunsets can be all yours. We offer Stand-up Paddle Board hourly and full day rentals during the no wind season!</p>
                <ul>
                    <li>Life vests are provided and required</li>
                    <li>Helmets optional</li>
                    <li>Wearing personal or school rashguards and zinc sunblock is recommended because of the Ecuadorian sunlight!</li>
                    <li>1 or two-hour lessons are recommended for this kind of ocean conditions</li>
                </ul>
            </div>
        </div>
        <div className='contenedor-surfC-3'>
            <div className="descripcion-surfC">
                <h2>SURF Lessons</h2>
                <p>Surfboard rental from $7 x Hour</p>
                <p>-$30 per day</p>
                <p>(Includes surfboard, rashguard, and leash)</p>
                <span></span>
                <p>Lessons $17 for 1 Hour</p>
                <p>-$30 Lessons for 2 Hours</p>
                <p>(Includes experienced instructor, Surfboard, rashguard, and leash)</p>
            </div>
        </div>
    </div>
)
}
export default KiteC