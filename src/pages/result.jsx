import React from 'react'
import '../css/getstarted.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../css/result.css'

function result() {
  return (
    <div>
         <div className='header'>
       <img src={logo} alt="" />
      
     </div>

     <div className='main-content'>
        <div className='text-content result'>
        <p>The potability score for your water supply based on the <br />
         provided parameters is  <span>0.82</span> , where a score above <span>0.7</span><br />
         indicates potable water suitable for drinking.</p>
        <Link to='/'><button>Restart
            </button></Link>
        </div>
     </div>

    </div>
  )
}

export default result