import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {

  const [currentVans, setCurrentVans] = useOutletContext()
  return (
    <img src={currentVans.imageUrl} className='host-van-detail-image' />
  )
}

export default HostVanPhotos