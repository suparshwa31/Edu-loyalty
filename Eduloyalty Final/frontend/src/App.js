import React from 'react';
import './App.css'
import SignUpForm from './components/signup/SignUpForm'; // Update the path based on your project structure
import SignInForm from './components/signup/SignInForm';
//import Dashboard from './components/signup/dashboard';
import Sidebar from './components/signup/SideBar Section/Sidebar'
import Body from './components/signup/Body Section/Body'
import HallOfFame from './components/templates/hallOfFame';
import Feedback  from './components/templates/feedback';
import ReferAFriend from './components/templates/referAFriend';
import ContactUs from  './components/signup/Contact_Us';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <h1>Welcome to EduLoyalty</h1>
    //   <SignUpForm /> Render the SignUpForm component here
    // </div>
    <Router>
            <Routes>
                <Route exact path="/" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/hallOfFame" element={<HallOfFame />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/referAFriend" element={<ReferAFriend />} />
                <Route path="/help-center" element={<ContactUs />} />
                <Route path="/dashboard" element={ 
                      <div className='dashboard-container'>
                      <Sidebar/>
                      <Body/>
                    </div>

                } 
                // <Route path="/dashboard" element={<Dashboard />}
                // <Route path="/dashboard" element={<Dashboard />
              
               />
            </Routes>
    </Router>
  );

  
}


export default App;

