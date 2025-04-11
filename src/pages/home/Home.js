import React, { useState } from 'react'
import { PopupWidget } from 'react-calendly';
import './Home.css'


function Home() {
const [breathe, setBreathe] = useState(null)


  return (
    <div className='hero-container'>
       

        <h1
            id='hero-text'
            className={`${breathe ? 'transform-active' : ''}`}
           
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

        <div className='calendly-wrapper'
          onMouseEnter={() => setBreathe(true)}
          onMouseLeave={() => setBreathe(false)}>
            <PopupWidget
                url='https://calendly.com/wilcoyonkin'
                rootElement={document.getElementById('root')}
                text='Book now'
                textColor='#fff'
                color='#000'
            />
        </div>


    </div>
  )
}

export default Home