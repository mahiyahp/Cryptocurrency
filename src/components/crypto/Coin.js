import React from 'react';

// Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.container}><table>
            <tr>

            <td>
              <img className={styles.image} src={image} alt={name} />  
            </td>

            <td>
                 <span className={styles.name} >{name}</span>
            </td>

            <td>
               <span className={styles.symbol} >{symbol.toUpperCase()}</span> 
            </td>
            
            <td>
                <span className={styles.currentPrice} >$ {price.toLocaleString()}</span>  
            </td>

            <td>
                  <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
            </td>
          
          <td>
             <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange}</span>
          </td>
           
             </tr>
             </table>
        </div>
    );
};

export default Coin;