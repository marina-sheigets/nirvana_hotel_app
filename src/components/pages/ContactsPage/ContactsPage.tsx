import React from 'react'
import Header from '../../features/Header/Header'
import ContactForm from '../../features/ContactForm/ContactForm'
import Map from '../../features/Map/Map'
import Footer from '../../features/Footer/Footer'

function ContactsPage() {
  return (
    <div>
        <Header/>
        <div>
            <ContactForm/>
            <Map/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactsPage