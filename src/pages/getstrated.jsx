import React from 'react'
import '../css/getstarted.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import icon from '../images/icon.png'


function getstrated() {
  return (
    <div>
     <div className='header'>
       <img src={logo} alt="" />
      
     </div>

     <div className='main-content'>
        <div className='text-content'>
        <p>Ensure safe drinking water. Analyze the <br />
        potability of your water supply with <br />
        AquaScan.</p>
        <Link to='/home'><button>Get Started
            <img src={icon} alt="" />
            </button></Link>
        </div>
     </div>


    </div>
  )
}

export default getstrated