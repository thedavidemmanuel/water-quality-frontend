import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../css/getstarted.css'
import '../css/home.css'

function home() {
  return (
    <div>
      <div className='home-header'>
        <div>
       <img src={logo} alt="" />
       </div>
       <Link to='/result'><button className='predict'>Predict water potability
            </button></Link>
     </div>

     <div className='page-content'>
       <div className='header-text'>
        <p>
        To analyze your water potability, enter the required parameters as precise integers or decimals in the provided fields. <br />
         Our model will evaluate the inputs to determine if your water is safe for drinking. Double-check your entries before <br />
         submitting for accurate results.
        </p>

        <div className='input-field'>
            <div className='set'>
            <div className='input-label'>
            <label>CHLORAMINES</label>
            <input type='number' placeholder='Input water chloramines level'/>
            </div>

          

            <div className='input-label'>
            <label>ORGANIC_CARBON</label>
            <input type='number' placeholder='Input water org_car level'/>
            </div>

            <div className='input-label'>
            <label>SOLIDS</label>
            <input type='number' placeholder='Input water solids level'/>
            </div>

            <div className='input-label'>
            <label>SULFATE</label>
            <input type='number' placeholder='Input water sulfate level'/>
            </div>

            <div className='input-label'>
            <label>TRIHALOMETHANES</label>
            <input type='number' placeholder='Input water trihalomethanes level'/>
            </div>

            <div className='input-label'>
            <label>HARDNESS</label>
            <input type='number' placeholder='Input water hardness level'/>
            </div>

            <div className='input-label'>
            <label>CONDUCTIVITY</label>
            <input type='number' placeholder='Input water conductivity level'/>
            </div>

            <div className='input-label'>
            <label>TURBIDITY</label>
            <input type='number' placeholder='Input water turbidity level'/>
            </div>

            <div className='input-label'>
            <label>PH</label>
            <input type='number' placeholder='Input water ph level'/>
            </div>
            </div>
        </div>
       </div>
     </div>

    </div>
  )
}

export default home