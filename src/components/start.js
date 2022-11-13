import Startbtn from '../images/startbtn.png'
import { NavLink } from 'react-router-dom'
import React from 'react'

function Start (){
    return (
        <div className='startbtn'>
            <NavLink to='/tutorial'>
                <img src={Startbtn} alt='startbtn' width={320} height={90} />
            </NavLink>
        </div>
    )
}
export default Start;