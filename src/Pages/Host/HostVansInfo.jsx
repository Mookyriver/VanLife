import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansInfo = () => {

  const [currentVans, setCurrentVans] = useOutletContext()
  return (
    <section className='host-van-detail-info'>
      <h4>Name: <span>{currentVans.name}</span></h4>
      <h4>Category: <span>{currentVans.type}</span></h4>
      <h4>Description: <span>{currentVans.description}</span></h4>
      <h4>Visbility: <span>Public</span></h4>
    </section>
  )
}

export default HostVansInfo