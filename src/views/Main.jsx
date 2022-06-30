import React from 'react'
import Header from './Header';
import VideoBack from '../components/VideoBack';
import Lessons from '../components/Lessons';
import "./views.css"
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import Prices from '../components/Prices';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="container-fluid-main">
            <div >
                <Header />
            </div>
            <div>
                <VideoBack/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div >
                <Lessons/>
            </div>
            <div>
                <Gallery/>
            </div>
            <div>
                <Prices/>
            </div>
            <div>
                <Testimonials/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;