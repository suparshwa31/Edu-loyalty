// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js

import React from 'react';
import LoginValidate from './components/loginvalidate'; // Update the path based on your project structure
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardDummy from './components/dashboarddummy';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginValidate />} />
        <Route path="/dashboarddummy" element={<DashboardDummy />} />
      </Routes>
    </Router>
  );
}

export default App;


