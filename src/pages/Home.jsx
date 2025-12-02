import React from 'react'
import Hero from '../Components/Hero'
import AboutStIgnatus from '../Components/AboutStIgnatus'
import HealthcareServices from '../Components/HealthcareServices'
import AppointmentBooking from '../Components/AppointmentBooking'
import Department from '../Components/Department'
import ExpertCare from '../Components/ExpertCare'
import TrustedPartners from '../Components/TrustedPartners'
import Testimonials from '../Components/Testimonials'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutStIgnatus/>
      <HealthcareServices/>
      <AppointmentBooking/>
      <Department/>
      <ExpertCare/>
      <Testimonials/>
      <TrustedPartners/>
     
      
    </div>
  )
}

export default Home