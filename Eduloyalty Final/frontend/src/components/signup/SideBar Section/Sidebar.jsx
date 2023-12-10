/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './sidebar.css'
import { useState } from 'react';


//Imported Images
import logo from '../../../Assets/logo.png'

// Imported Icons
import {IoMdSpeedometer} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import {VscFeedback} from 'react-icons/vsc'
import {FaMedal} from 'react-icons/fa'
import {VscReferences} from 'react-icons/vsc'
import {IoMdLogOut} from 'react-icons/io'
import {BsQuestionCircle} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial login status
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any additional logout actions here (e.g., clearing tokens, etc.)
    // For now, we'll just update the state to simulate a logout
    setIsLoggedIn(false);
    navigate('/'); 

  };

  const handleGoToHelpCenter = () => {
    // Navigate to the help center page
    navigate('/help-center');
  };

  // Function to generate a random 6-digit code
  const generateRandomCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code.toString().substring(0, 6);
  };

  const handleReferClick = () => {
    const referralCode = generateRandomCode();

    // Show popup/modal here with the referral code
    alert(`Your referral code is: ${referralCode}`);

    // Once clicked on the code, copy it to the clipboard
    navigator.clipboard.writeText(referralCode)
      .then(() => {
        console.log('Referral code copied to clipboard:', referralCode);
        // You might want to show a success message here
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        // Handle error, show an error message
      });
  };

  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src = {logo} alt='Image Name'/>
        <h3>Eduloyalty</h3>
      </div>

      <div className="menuDiv">
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>

            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                    <IoMdSpeedometer classsName ='icon' />
                    <span className='smallText'>
                      Dashboard
                    </span>
                </a>
            </li>

            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                    <CgProfile classsName ='icon' />
                    <span className='smallText'>
                      Profile
                    </span>
                </a>
            </li>

            <li className='listItem'>
              {/* Use Link instead of anchor tag */}
              <Link to="/feedback" className='menuLink flex'>
                    <VscFeedback classsName ='icon' />
                    <span className='smallText'>
                      Feedback
                    </span>
                </Link>
            </li>

            <li className='listItem'>
            {/* Use Link instead of anchor tag */}
              <Link to="/hallOfFame" className='menuLink flex'>
                <FaMedal className ='icon' />
                  <span className='smallText'>
                    Hall of Fame
                  </span>        
                </Link>
              </li>

              <li className='listItem'>
                {/* Use Link instead of anchor tag */}
                <Link to="#" className="menuLink flex" onClick={handleReferClick}>
        <VscReferences className="icon" />
        <span className="smallText">Refer a Friend</span>
      </Link>
            </li>

          {isLoggedIn && (
          <li className='listItem'>
            <a href='#' className='menuLink flex' onClick={handleLogout}>
              <IoMdLogOut className='icon' />
              <span className='smallText'>Logout</span>
            </a>
          </li>
          )}
        </ul>
      </div> 
      
      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className = 'circle1'> </div> 
          <div className = 'circle2'></div>
          
          <h3> Help Center</h3>
          <p> Having trouble in Eduloyalty? Please contact us for more questions.</p>
          <button className='btn' onClick={handleGoToHelpCenter}>Go to help center</button>
        </div> 
        </div> 
    </div> 
  )
}

export default Sidebar;
