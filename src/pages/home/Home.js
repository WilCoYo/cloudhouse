import React, { useState } from 'react'
import './Home.css'


function Home() {

const [breathe, setBreathe] = useState(null)



  return (
    <div className='hero-container'>
       

        <h1
            className={`hero-text ${breathe ? 'transform-active' : ''}`}
           
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

        <button 
            className='book-btn'
            onMouseEnter={() => setBreathe(true)}
            onMouseLeave={() => setBreathe(false)}>
        Book now
        </button>
    </div>
  )
}

export default Home