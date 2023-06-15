import React from 'react';
import Navbar from '../Component/Navbar';
import "../Styles/Homepage.css"
import GridBox from '../Component/GridBox';

function Homepage() {
    return (
        <div>
            <Navbar />
            <div className='box'>
                <p className='title'>Title</p>
                <div className='paragrpah'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Vero cupiditate atque harum, odio saepe, labore numquam eaque 
                    expedita quis autem.
                </p>
                </div>
                <button className=' btnClass btn btn-outline-dark'>Read More</button>
            </div>

            <div className='classBox'>
                <p className='title'>Classes</p>
                <p className='loremPara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quidem iste culpa.</p>
            </div>

            <GridBox />

            <div className='footer'>
                <p>copyright &copy; 2021. All Right Reserve</p>
                <p><a href="#">Back to top</a></p>
            </div>
        </div>
    );
}

export default Homepage;