import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./views.css"
import { useState } from 'react'

const Header = (props) => {
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false)
    const [whale, setWhale] = useState(false)

    const changeBackground = () =>{
      if (window.scrollY >=40){
        setNavbar(true)
      } else{
        setNavbar(false)  
      }
    };

    window.addEventListener('scroll', changeBackground)

    const changeSize= () =>{
      if (window.scrollY >=40){
        setWhale(true)
    } else{
      setWhale(false)
    }
    
  }
  window.addEventListener('scroll', changeSize)



    return (
      <div>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='img-nav'>
                    <img className={whale ? 'whale active' : 'whale'} src="https://kiteecuador.com/wp-content/uploads/2018/12/KiteFinalwhale.png" alt="logo kite" />
                </div>
                <div className='nav-btn'>
                  <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                </div>
                <div className='nav-opt'>
                    <a href='home'>Home</a>
                    <a href='school'>Our School</a>
                    <a href='accomodations'>Accomodations</a>
                    <a href='tips'>Tips & info</a>
                    <a href='contact'>Contact & Booking</a>
              </div>
        </nav>
      </div>
        
    )
}

export default Header




//<div className='logo-bar'>
  //              <div className='img-nav'>
    //                <img className='WHALE' src="https://kiteecuador.com/wp-content/uploads/2018/12/KiteFinalwhale.png" alt="logo kite" />
      //              <img  className='IKO' src="https://kiteecuador.com/wp-content/uploads/2020/06/KiteEcuador-The-best-Kiteboarding-school-Ecuador-Affiliated-to-IKO-lampp.png" alt="IKO LOGO" />
        //        </div>
          //      <div className='nav-opt'>
            //        <a href='home'>Home</a>
              //      <a href='school'>Our School</a>
                //    <a href='accomodations'>Accomodations</a>
                  //  <a href='tips'>Tips & info</a>
                    //<a href='contact'>Contact & Booking</a>
    //            </div>
      //      </div>