import { useState } from 'react'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'


import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/VanDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import "./server"
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import HostVans from './Pages/Host/HostVans'
import HostVansDetails from './Pages/Host/HostVansDetails'
import HostVansInfo from './Pages/Host/HostVansInfo'
import HostVanPhotos from './Pages/Host/HostVanPhotos'
import HostVanPricing from './Pages/Host/HostVanPricing'

function App() {
  

  return (
    <>
     <BrowserRouter>

      
      <Routes>

        <Route element={<Layout />}>

          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />


            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVansInfo />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            
            
            
            </Route>

            
          </Route>
        </Route>
        

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
