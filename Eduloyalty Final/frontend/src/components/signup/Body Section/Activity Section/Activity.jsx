import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../../Assets/suparshwa.png'
import user2 from '../../../../Assets/shruti.png'
import user3 from '../../../..//Assets/prof.png'
import user4 from '../../../../Assets/prasad.png'
import user5 from '../../../../Assets/parisha.png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Recent Student Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Suparshwa Patil</span>
            <small>Reedemed a new coupon.</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Shruti Mandaokar</span>
            <small>Reedemed a new coupon.</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Matthew Parker</span>
            <small>Reedemed a new coupon.</small>
          </div>
          <div className="duration">
            10 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Prasad Mahabare</span>
            <small>Reedemed a new coupon.</small>
          </div>
          <div className="duration">
            12 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Parisha Desai</span>
            <small>Reedemed a new coupon.</small>
          </div>
          <div className="duration">
            15 min ago
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity