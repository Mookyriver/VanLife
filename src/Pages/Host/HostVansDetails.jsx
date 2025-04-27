import React, { useEffect, useState } from 'react'
import { NavLink,Link, Outlet, useParams } from 'react-router-dom'

const HostVansDetails = () => {

    const {id} = useParams()
    const [currentVans, setCurrentVans] = useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVans(data.vans))
    },[])

        if(!currentVans){
            return(
                <h1>Loading...</h1>
            )
        }

  return (

    <section>
        <Link
            to='..'
            className='back-button'
            relative='path'
        >
            &larr; <span>Back to all vans</span>
        </Link>
            <div className="host-van-detail-layout-container">
             <div className="host-van-detail">
                <img src={currentVans.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVans.type}`}
                    >
                        {currentVans.type}

                    </i>
                    <h3>{currentVans.name}</h3>
                    <h4>{currentVans.price}/day</h4>
                </div>
            </div>
            <nav className='host-van-detail-nav'>
                <NavLink 
                to='.' 
                end
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details</NavLink>
                <NavLink 
                to='pricing'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing</NavLink>
                <NavLink 
                to='photos'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos</NavLink>

            </nav>
            <Outlet context={[currentVans, setCurrentVans]}/>
            
        </div>
    </section>
    
  )
}

export default HostVansDetails