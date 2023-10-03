import React from 'react';
import './homePage.scss';
import Landing from '../crypto/Landing';
import CryptoInfo from '../cryptoInfo/cryptoInfo';
import LandingPage from './landing/landing';


function HomePage() {

    return ( 
        <div className='homePage'>
            <LandingPage/>

            <div className='first-div-homePage'>
                <h1>Today's Cryptocurrency Prices by Market Cap</h1>
                <p>The global crypto market cap. Buy Bitcoin, Ethereum, and all your favorite crypto</p>
            <div>
                <CryptoInfo/>
            </div>
            <div>
                <Landing/>
            </div>
        </div>
          </div>
     );
}

export default HomePage;