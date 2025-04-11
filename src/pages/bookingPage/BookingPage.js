import React from 'react'
import './bookingPage.css'
import { InlineWidget } from 'react-calendly'

function BookingPage() {
  return (
    <div className='calendly-container'>
        <InlineWidget url='https://calendly.com/wilcoyonkin' />
    </div>
  )
}

export default BookingPage