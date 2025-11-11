import React from 'react'
import Hero from '../Components/Hero'
import AboutStIgnatus from '../Components/AboutStIgnatus'
import HealthcareServices from '../Components/HealthcareServices'
import AppointmentBooking from '../Components/AppointmentBooking'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutStIgnatus/>
      <HealthcareServices/>
      <AppointmentBooking/>
    </div>
  )
}

export default Home