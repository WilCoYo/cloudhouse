import React, { useState } from 'react'
import './Home.css'


function Home() {

const [breathe, setBreathe] = useState(null)

  return (
    <div className='hero-text'>
       

        <h1
            onMouseEnter={() => setBreathe(true)}
            onMouseLeave={() => setBreathe(false)}
        >
            Breathe
        </h1>
        {breathe == null ? (
            <h4 className='hidden'>in</h4>
        ) : breathe === true ? (
            <h4 className='fade-in'>in</h4>
            
        ) : (
            <h4 className='fade-in'>out</h4>
        )}

        
    </div>
  )
}

export default Home