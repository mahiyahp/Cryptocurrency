import React from 'react';
import './landing.scss';
function LandingPage() {
    return ( 
        <div className='landingvideo-div'>
            <div className='overlay'></div>
<video src="/cryptolanding2.mp4" type="video/mp4" alt="landingpagevideo" autoPlay loop muted />
<div className='content'>
    <h1><span>Crypto</span>currency platform</h1>
    <p>Buy bitcoin, ethereum, and all your favorite crypto</p>
    <div className='landing-buttons'>
        <button className='buy-btn'>Buy</button>
        <button className='subscribe-btn'>Subscribe</button> 
    </div>

</div>
        </div>
     );
}

export default LandingPage;