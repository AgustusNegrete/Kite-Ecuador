import './components.css'
import MyVideo from "./img/duotone.mp4"


const VideoBack = () =>{
    return(
        <div className='contenedor-video'>
            <video src={MyVideo} autoPlay loop muted/>
            <div className='content'>
                
            </div>
        </div>
    )
    }

export default VideoBack