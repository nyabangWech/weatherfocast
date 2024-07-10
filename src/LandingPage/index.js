 import './index.css';
const landpage=()=>(
    <div className="container">

        <div className='navbar'>
            <div>
                <p className='rayn'>Rayn</p>
            </div>
            
            <div>
                <input placeholder='Enter city' type='text' className='city' />
            </div>
        </div>
        <div>
            <img src="images/weather2003.png" className="images" />
        </div>

        <div className='weatherpattern'>
            <img src="images/humd.png" width='100px' className='Image' />
            <div>
                <p>Humdity</p>
                <b>39%</b>
                <div className='weather1'>
            <img src="images/sunset.png" width='150px' className='Image' />
            <div>
                <p>sunset</p>
                <b>7:50pm</b>
            </div>
           </div>
            </div>
            
            <div className='weathercondition'>
            <div className='temp'>
                <p>Temperature.</p>
            </div>
            <div className='precipitation'>
                <p>precipitation.</p>
            </div>
            <div className='wind'>
            <p>Wind</p>
            </div>
        </div>
        </div>

<div>
    <img src="images/condition.png"  width='600px'className='condition'/>
</div>

        <div className='weather2'>
            <img src="images/uv index.png" width='150px' className='Image' />
            <div>
                <p>uv index</p>
                <b>0 of 10</b>
            </div>
            <div className='weather3'>
            <img src="images/sunrise.png" width='150px' className='Image' />
            <div>
                <p>sunrise</p>
                <b>6:35pm</b>
            </div>
        </div>
        </div>
        {/* <div className='monthlyrainfall'>
        <p>Montly Rainfall</p>
        <b>45MM</b>
        <div className='year'>
         <p>This Year</p>
         <b>+17%</b>
        </div>
        </div> */}

        
       
















    </div>



)
export default landpage;