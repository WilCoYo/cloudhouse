import React, { useEffect, useState, useRef } from 'react'
import './bookingPage.css'
import { InlineWidget } from 'react-calendly'

function BookingPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const attemptCount = useRef(0);
    const maxAttempts = 3;
    
    useEffect(() => {
      // Function to load Calendly
      const loadCalendly = () => {
        // Reset any previous error state
        setLoadError(false);
        
        // Attempt to load Calendly
        const timer = setTimeout(() => {
          const calendlyContainer = document.querySelector('.calendly-inline-widget');
          
          if (calendlyContainer && window.Calendly) {
            // Calendly is available and container exists
            setIsLoaded(true);
          } else {
            // Increment attempt counter
            attemptCount.current += 1;
            
            if (attemptCount.current < maxAttempts) {
              // Try again
              loadCalendly();
            } else {
              // Give up after max attempts
              setLoadError(true);
              setIsLoaded(true); // Show the widget anyway as fallback
            }
          }
        }, 800); // Increased timeout for more reliable loading
        
        return () => clearTimeout(timer);
      };
      
      // Start loading process
      loadCalendly();
      
      // Cleanup function
      return () => {
        attemptCount.current = 0;
      };
    }, []);
    
    // Function to handle manual reload
    const handleManualReload = () => {
      attemptCount.current = 0;
      setIsLoaded(false);
      setLoadError(false);
      
      // Force re-rendering of the component
      window.Calendly = undefined;
      
      // Re-load Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    };
    
    return (
      <div className='calendly-container'>
        {!isLoaded ? (
          <div className="loading-container">
            <p>Loading calendar...</p>
          </div>
        ) : (
          <>
            <InlineWidget url='https://calendly.com/wilcoyonkin' />
            
            {loadError && (
              <div className="calendly-error">
                <p>Having trouble loading the calendar?</p>
                <button onClick={handleManualReload} className="reload-button">
                  Reload Calendar
                </button>
              </div>
            )}
          </>
        )}
      </div>
    )
  }

export default BookingPage