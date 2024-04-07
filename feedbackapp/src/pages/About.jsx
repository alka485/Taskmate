import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return  <Card>
    <div className='about'>
        <h1>About this Project</h1>
        <p>This is React app</p>
        <p>Version: 1.0</p>

        <p>
            <Link to='/'>Back to home</Link>
        </p>
      
    </div>
    </Card>
  
}

export default About
