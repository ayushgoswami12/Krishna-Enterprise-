// import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'
import Showcase from './Showcase'
import Footer from './Footer'
import ProductListing from './ProductListing'
import ContactCopy from './ContactCopy'
import WhatsappIntegrate from './WhatsappIntegrate'
import Brochure from './Brochure'

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <WhatsappIntegrate></WhatsappIntegrate>
      <Showcase></Showcase>
      <ProductListing></ProductListing>
      <Brochure></Brochure>
      <ContactCopy></ContactCopy>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
