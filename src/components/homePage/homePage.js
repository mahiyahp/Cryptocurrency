import React from 'react';
import './homePage.scss';
import Carousel from '../carousel/carousel';
import LandingPage from '../landing/landing';
import Landing from '../crypto/Landing';


function HomePage() {

    return ( 
        <div className='homePage'>
            <LandingPage/>
            <div className='first-div-homePage'>
                <h1>Cryptocurrency Spot Exchanges</h1>
                <p>CoinMarketCap ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.</p>
            <div>
                <Carousel/>
            </div>
            <div>
                <Landing/>
            </div>
        </div>
          </div>
     );
}

export default HomePage;