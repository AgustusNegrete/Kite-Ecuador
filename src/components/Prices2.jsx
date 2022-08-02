import './Prices2.css'
import Divider from '@mui/material/Divider';


const Prices2 = () =>{
    return(
        <div className='contenedor-prices'>
            <div className='contenedor-header-prices'>
                <h1>Kite School Courses</h1>
            </div>
            <div className='contenedor-card-kiteC'>
                <div class="card">
                    <div class="card-info">
                        <p class="title">2 Hour Fun</p>
                        <p class="subtitle">Web Dev</p>
                    </div>
                    <div class="card-bio">
                    <h6>Become certified up to level 1 D to E with the IKO member card</h6>
                        <p>A Two-hour kiteboarding Kitesurf lesson HAVING FUN covering the basics on the sand and water that will transfer you to the Adventure Kite Course</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-info">
                        <p class="title">4 Hour Adventure</p>
                        <p class="subtitle">Web Dev</p>
                    </div>
                    <div class="card-bio">
                    <h6>Become certified up to level 2 Intermediate F or G with the IKO member card</h6>
                        <p>4 hours of fun adventure The next two-hour kiteboarding lesson allows you to experience the true power of the kite in the water. </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-info">
                        <p class="title">10 Hour Freeride</p>
                        <p class="subtitle">Web Dev</p>
                    </div>
                    <div class="card-bio">
                        <h6>Become certified up to level 3 Independent “G” to “J” with the IKO member card</h6>
                        <p>This is our 8 to 10 hour (3 to 4 day) course designed to cover all the steps that will turn you into a independent FREERIDE basic or complete kiteboarder. </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-info">
                        <p class="title">14 Hour Freeride</p>
                        <p class="subtitle">Web Dev</p>
                    </div>
                    <div class="card-bio">
                    <h6>Become certified up to level 3 Independent “K” to “L” with the IKO member card</h6>
                        <p>This is our 12 to 14 hour (4 day ) course designed to cover all the steps that will turn you into a independent FREERIDE complete kiteboarder. </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Prices2