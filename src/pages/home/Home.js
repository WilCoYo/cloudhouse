import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import NavBar from '../../components/NavBar';


function Home() {
const navigate = useNavigate();
const [breathe, setBreathe] = useState(null)



  return (
    <div className='hero-container'>
       < NavBar />

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
            onClick={(e) =>{
                e.preventDefault();
                navigate('/book');
            }}
            onMouseEnter={() => setBreathe(true)}
            onMouseLeave={() => setBreathe(false)}>
        Book now
        </button>
    </div>
  )
}

export default Home