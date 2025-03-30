import React from 'react'
import Landingpage from '../Pages/Landingpage'
import TopCategory from '../Pages/TopCategory'
import Blogs from '../Pages/Blogs'
import About from '../Pages/About'
import SuccessPartners from '../Pages/SuccessPartners'
import { Contact } from 'lucide-react'

function Home() {
  return (
    <div>
      <Landingpage />
      <About />
      <TopCategory />
      <SuccessPartners />
      <Blogs />
     
    </div>
  )
}

export default Home