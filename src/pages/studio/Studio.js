import React from 'react'
import './Studio.css'
import Article from '../../images/breathwork-article.jpg'

function Studio() {

  return (
    <div className='studio-container'>
      <div className='left-container'>
          <div className='our-studio'>
              <h2>Our Studio</h2>
              <p>
                  Welcome to Cloud House — a breathwork and meditation studio designed to help you reconnect, recenter, and rise. We believe in creating a space where stillness meets transformation, guiding you through intentional breath and mindful presence. Whether you're just starting your journey or deepening your practice, Cloud House offers a sanctuary for self-discovery, healing, and inner peace. Come as you are. Leave lighter.
              </p>
          </div>

          <div className='what-we-do'>
              <h2>What we do</h2>
              <p>At Cloud House, we offer guided breathwork sessions, meditation classes, and mindful experiences designed to support emotional release, nervous system regulation, and deep inner clarity. Our practices draw from ancient wisdom and modern techniques to create grounded, accessible pathways to presence. Through conscious breathing, stillness, and intention, we help you move energy, clear blocks, and reconnect with your body and heart. Whether you're here to release stress, find focus, or simply breathe more freely — our space is here to hold you. We host regular group sessions, one-on-one journeys, and community gatherings, all rooted in compassion, awareness, and the quiet power of the breath.</p>
          </div>

          <div className='our-classes'>
            <h2>Our Classes</h2>
            <p>At Cloud House, we offer a range of breathwork classes designed to support emotional release,
              nervous system regulation, and inner clarity. Whether you're looking to energize, unwind, or reconnect,
              we've created an experience for you:
              <ul>
                <li>
                  <strong>Foundations</strong> - A beginner-friendly class that introduces you to conscious breath patterns and helps you build a grounded practice.
                </li>
                <li>
                  <strong>Elevate</strong> – A more active session for emotional clearing and deep release, guided with music and intention.
                </li>
                <li>
                  <strong>Restore</strong> – A gentle, calming class focused on nervous system soothing and inner stillness—perfect for winding down.
                </li>
                <li>
                  <strong>Breath + Sound</strong> – A meditative blend of breathwork and sound healing using instruments like crystal bowls and chimes.
                </li>
                <li>
                  <strong>Community Circles</strong> – Breath-led group sessions with space for connection, journaling, and integration.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className='right-container'>
          <img 
            className="article" 
            src={Article} 
            alt='Article for somatic breathing techniques' 
            onClick={() => {
              window.open("https://chantfull.com/somatic-breathwork/", "_blank");
            }}/>
        </div>
    </div>
    
  )
}

export default Studio