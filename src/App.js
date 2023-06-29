// import React,{useState} from 'react'
// import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import Aboutpage from './pages/Aboutpage';
// import NoteState from './context/notes/noteState';
// import Loginpage from './pages/Loginpage';
// import SignupPage from './pages/SignupPage';
// // import Alert from './components/Alert';

// function App() {
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//         setAlert(null);
//     }, 1500);
// }

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Homepage showAlert={showAlert}/>,
//     },
//     {
//       path: "/about",
//       element: <Aboutpage />,
//     },
//     {
//       path: "/login",
//       element: <Loginpage showAlert={showAlert}/>,
//     },
//     {
//       path: "/signup",
//       element: <SignupPage showAlert={showAlert}/>,
//     }
    
//   ]);
//   return (
//     <>
//       <NoteState>
//         <React.StrictMode>
//           <RouterProvider router={router} />
//         </React.StrictMode>
//       </NoteState>
      

      
//     </>


//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import NoteState from './context/notes/noteState';
import Loginpage from './pages/Loginpage';
import SignupPage from './pages/SignupPage';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar/>
      <NoteState>
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Homepage showAlert={showAlert} />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/login" element={<Loginpage showAlert={showAlert} />} />
          <Route path="/signup" element={<SignupPage showAlert={showAlert} />} />
        </Routes>
      </NoteState>
    </Router>
  );
}

export default App;
