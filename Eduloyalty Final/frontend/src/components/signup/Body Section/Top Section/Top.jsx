/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState } from 'react';
import './top.css'
import Listing from '../Listing Section/Listing';
import Feedback from '../../../templates/feedback';

//Imported Icons
import {BiSearch} from 'react-icons/bi'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {IoNotificationsCircleSharp} from 'react-icons/io5'

// Imported Image
import img from '../../../../Assets/shruti.png'
import img2 from '../../../../Assets/coupon.png'
import video from '../../../../Assets/video.mp4'
import { BsArrowRightCircle } from 'react-icons/bs'

const Top = () => {

  const [points, setPoints] = useState({
    today: 150,
    thisMonth: 1500,
  });

  const redeemPoints = (pointsToRedeem) => {
    if (points.thisMonth >= pointsToRedeem) {
      setPoints((prevPoints) => ({
        ...prevPoints,
        thisMonth: prevPoints.thisMonth - pointsToRedeem,
      }));
    } else {
      alert("Insufficient points to redeem!");
    }
  };

  const setEarnedPoints = (earnedPoints) => {
    setPoints((prevPoints) => ({
      ...prevPoints,
      thisMonth: prevPoints.thisMonth + earnedPoints, // Update thisMonth points
    }));
  };
  
  return (
    <div className = 'topSection'>
      <div className = "headerSection flex">
        <div className='title'>
          <h1> Welcome to EduLoyalty</h1>
          <p>Welcome back!</p>
        </div>

        <div className="adminDiv flex">
          {/* <TbMessageCircle2Filled className ="icon"/>
          <IoNotificationsCircleSharp className="icon"/> */}
          {/* <div className = "adminImage">
            <img src = {img} alt = "Admin Image" />
          </div> */}

        </div>

      </div>

      <div className='cardSection flex'>
        <div className="rightCard flex">
          <h1>Visit .Purdue Webpages, Earn Rewards </h1>
          <p>Earn Coupons and Bagdes through your active participation on Purdue Websites! </p>
          
  

          <div className = "videoDiv">
            <video src = {video} autoPlay loop muted> </video>
          </div>    
         
          </div>

        <div className="leftCard flex">
          <div className = "main flex">
            <div className = "textDiv">
              <h1>My Rewards</h1>
              
              <div className='flex'>
          
                <span>
                  Total Point <br/> <small> {points.thisMonth} points </small>
                </span>
              </div>
              
             

            </div>
  
            
            
          </div>
        </div> 
      </div>  
      <Listing redeemPoints={redeemPoints} />
    </div>
    
  );
};

export default Top
