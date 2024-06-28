import './index.css'
import React from 'react';
const API_KEY='14fda568d6e74f9fb26143752242706-API_KEY'
const API_BASE_URL='http://api.weatherapi.com'
const weather=()=>{
    return(
        <div>
        <h1>Rayn</h1>
        <div>
         <input type="text"placeholder='Search ' className='Searchbar'/>
        </div>
        </div> 
    )
    
    
    

};
export default weather;
