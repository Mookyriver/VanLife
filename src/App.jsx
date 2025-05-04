import { useState } from 'react'
import { RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link} from 'react-router-dom'


import Home from './Pages/Home'
import About from './Pages/About'
import Vans, { loader as vansLoader } from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/VanDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import HostVans from './Pages/Host/HostVans'
import HostVansDetails from './Pages/Host/HostVansDetails'
import HostVansInfo from './Pages/Host/HostVansInfo'
import HostVanPhotos from './Pages/Host/HostVanPhotos'
import HostVanPricing from './Pages/Host/HostVanPricing'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Error from './components/Error'
import "./server"
import AuthRequired from './components/AuthRequired'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />}/>
  <Route path='about' element={<About />}/>
  <Route path='login' element={<Login />} />
  <Route 
    path='vans' 
    element={<Vans/>}
    errorElement={<Error />}
    loader={vansLoader}

  />
  <Route path="vans/:id" element={<VanDetail />} />

  <Route element={<AuthRequired />}>
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
  <Route path="*" element={<NotFound />}/>
  </Route>

))

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
