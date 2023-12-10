/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './listing.css';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import img from '../../../../Assets/coupon1.png';
import img1 from '../../../../Assets/coupon2.png';
import img2 from '../../../../Assets/coupon3.png';
import img3 from '../../../../Assets/coupon4.png';
import img4 from '../../../../Assets/coupon5.png';
import img5 from '../../../../Assets/coupon6.png';
import user1 from '../../../../Assets/suparshwa.png';
import user2 from '../../../../Assets/shruti.png';
import user3 from '../../../..//Assets/prof.png';
import user4 from '../../../../Assets/prasad.png';
import user5 from '../../../../Assets/parisha.png';

const RedeemedCoupons = ({ redeemedCoupons }) => {
  return (
    <div className='redeemedCoupons' style={{paddingTop: 50}}>
      <h2>Redeemed Coupons:</h2>
      <ul>
        {redeemedCoupons.map((coupon, index) => (
          <li key={index}>
            <span className="couponName">{coupon.name}</span>
            <span className="couponTimestamp">{`Redeemed at ${coupon.timestamp}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};



const Listing = ({ redeemPoints }) => {
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);

  const handleRedeem = (pointsToRedeem, couponName) => {
    const timestamp = new Date().toLocaleString();
    const redeemedCoupon = { name: couponName, timestamp };
    setRedeemedCoupons([...redeemedCoupons, redeemedCoupon]);
    redeemPoints(pointsToRedeem);
  };

  return (
    <div className='listingSection'>
      <div className='heading flex' style={{paddingTop: 50}}>
        <h1> Coupons Available </h1>
        {/* <button className='btn flex'>
          See All <BsArrowRight className='icon' />
        </button> */}
      </div>

      <div className='secContainer flex'>
        {/* Example coupon item */}
        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img} alt='Shutterfly Coupon' />
          <h3>Shutterfly</h3>
          <div className='flex'>
            <span>
              Points <br /> <small>150</small>
            </span>
            <span>
              Expires <br /> <small>12/05/2023</small>
            </span>
          </div>
          <button className='redeemButton' onClick={() => handleRedeem(150, 'Shutterfly')}>
            Redeem
          </button>
        </div>
        {/* Add more coupon items similarly */}

        {/* Example of handling redemption for another coupon */}
        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img1} alt='Vistaprint Coupon' />
          <h3>Vistaprint</h3>
          <div className='flex'>
            <span>
              Points <br /> <small>200</small>
            </span>
            <span>
              Expires <br /> <small>In 2 days</small>
            </span>
          </div>
          <button className='redeemButton' onClick={() => handleRedeem(200, 'Vistaprint')}>
            Redeem
          </button>
        </div>
        {/* Add more coupon items similarly */}
        <div className='singleItem'>
           <AiFillHeart className = 'icon' />
           <img src = {img3} alt = "Image Name"/>
           <h3> Walmart</h3>
           <div className='flex'>
                <span>
                  Points  <br/> <small> 200 </small>
                </span>
                <span>
                  Expires <br/> <small> 12/05/2023 </small>
                </span>
              </div>
              <button className='redeemButton' onClick={() => handleRedeem(200, 'Walmart')}>Redeem</button>
        </div>
      </div>
      <RedeemedCoupons redeemedCoupons={redeemedCoupons} />
    </div>
  );
};


export default Listing;
