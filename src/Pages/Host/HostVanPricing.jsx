import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const [currentVans, setCurrentVans] = useOutletContext()
  return (
    <h3 className='host-van-price'>${currentVans.price}<span>/day</span></h3>
  )
}

export default HostVanPricing