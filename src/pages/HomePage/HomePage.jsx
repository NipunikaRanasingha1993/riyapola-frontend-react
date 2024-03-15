import { Button } from '@mui/material'
import './HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return(
        <div>

    <section className='hero'>
      <div className='content'>
        <h1>Riyapola Car..</h1>
        <p>
          "Get ready to go your jurney with different kind of Vehicals..""
        </p>
        <Link to={'/loginPage'} className='btn'>
        <h4>Go to Login</h4>
        </Link>
        
      </div>

    </section>
    </div>
    )
}