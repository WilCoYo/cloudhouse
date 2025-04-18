import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PopupWidget } from 'react-calendly';
import './Home.css'


function Home() {
const navigate = useNavigate();
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
                url='https://calendly.com/calendlytesteremail'
                rootElement={document.getElementById('root')}
                text='Book now'
                textColor='#fff'
                color='#000'
            />
            <button 
                className='studio-btn'
                onClick={() => {
                    navigate('/studio');
                  }}>
                Our Studio
            </button>
        </div>
        <p>A San Francisco-based breathwork and meditation studio</p>


    </div>
  )
}

export default Home